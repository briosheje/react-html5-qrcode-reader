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
    var loaded = useHtml5QrCodeScript(html5QrCodeScriptUrl).loaded;
    var Html5Qrcode = useMemo(function () { return window.Html5Qrcode; }, [
        window.Html5Qrcode,
    ]);
    return { Html5Qrcode: Html5Qrcode, loaded: loaded };
}
export default useHtml5QrCode;
