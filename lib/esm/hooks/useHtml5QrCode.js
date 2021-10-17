import { useMemo } from 'react';
import useHtml5QrCodeScript from './useHtml5QrCodeScript';
/**
 * Hook returning the Html5Qrcode instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCode(html5QrCodeScriptUrl) {
    var html5QrcodeScriptLoaded = useHtml5QrCodeScript(html5QrCodeScriptUrl).loaded;
    var Html5Qrcode = useMemo(function () {
        if (html5QrcodeScriptLoaded) {
            return window.Html5Qrcode;
        }
        return undefined;
    }, [html5QrcodeScriptLoaded]);
    return { Html5Qrcode: Html5Qrcode };
}
export default useHtml5QrCode;
