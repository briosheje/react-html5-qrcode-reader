"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useHtml5QrCode_1 = __importDefault(require("./useHtml5QrCode"));
function useAvailableDevices(scriptUrl) {
    var Html5Qrcode = (0, useHtml5QrCode_1.default)(scriptUrl).Html5Qrcode;
    var _a = (0, react_1.useState)(undefined), devices = _a[0], setDevices = _a[1];
    var _b = (0, react_1.useState)(undefined), error = _b[0], setError = _b[1];
    (0, react_1.useEffect)(function () {
        if (Html5Qrcode) {
            Html5Qrcode.getCameras().then(function (cameras) {
                setDevices(cameras);
            }).catch(function (getCamerasError) {
                setError(getCamerasError);
            });
        }
    }, [Html5Qrcode]);
    return { devices: devices, error: error };
}
exports.default = useAvailableDevices;
