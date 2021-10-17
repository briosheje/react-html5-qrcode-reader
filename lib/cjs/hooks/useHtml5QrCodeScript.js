"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var loadDomScript_1 = __importDefault(require("../utils/loadDomScript"));
function useHtml5QrCodeScript(scriptUrl) {
    var _a = (0, react_1.useState)(false), loaded = _a[0], setLoaded = _a[1];
    // Include the script if it is not already included.
    (0, react_1.useEffect)(function () {
        (0, loadDomScript_1.default)(scriptUrl, function () {
            setLoaded(true);
        });
    }, []);
    return { loaded: loaded };
}
exports.default = useHtml5QrCodeScript;
