"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useHtml5QrCodeScript_1 = __importDefault(require("./useHtml5QrCodeScript"));
/**
 * Hook returning the Html5Qrcode instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCode(html5QrCodeScriptUrl) {
    var loaded = (0, useHtml5QrCodeScript_1.default)(html5QrCodeScriptUrl).loaded;
    var Html5Qrcode = (0, react_1.useMemo)(function () { return window.Html5Qrcode; }, [
        window.Html5Qrcode,
    ]);
    return { Html5Qrcode: Html5Qrcode, loaded: loaded };
}
exports.default = useHtml5QrCode;
