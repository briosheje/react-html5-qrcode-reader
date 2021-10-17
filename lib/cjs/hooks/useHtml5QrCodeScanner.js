"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useHtml5QrCodeScript_1 = __importDefault(require("./useHtml5QrCodeScript"));
/**
 * Hook returning the Html5QrcodeScanner instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCodeScanner(html5QrCodeScriptUrl) {
    var html5QrcodeScriptLoaded = (0, useHtml5QrCodeScript_1.default)(html5QrCodeScriptUrl).loaded;
    var Html5QrcodeScanner = (0, react_1.useMemo)(function () {
        if (html5QrcodeScriptLoaded) {
            return window.Html5QrcodeScanner;
        }
        return undefined;
    }, [html5QrcodeScriptLoaded]);
    return { Html5QrcodeScanner: Html5QrcodeScanner };
}
exports.default = useHtml5QrCodeScanner;
