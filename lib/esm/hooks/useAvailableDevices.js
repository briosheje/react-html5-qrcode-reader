import { useEffect, useState } from 'react';
import useHtml5QrCode from './useHtml5QrCode';
function useAvailableDevices(scriptUrl) {
    var Html5Qrcode = useHtml5QrCode(scriptUrl).Html5Qrcode;
    var _a = useState(undefined), devices = _a[0], setDevices = _a[1];
    var _b = useState(undefined), error = _b[0], setError = _b[1];
    useEffect(function () {
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
export default useAvailableDevices;
