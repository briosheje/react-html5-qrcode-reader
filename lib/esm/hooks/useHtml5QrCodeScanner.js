import { useMemo } from 'react';
import useHtml5QrCodeScript from './useHtml5QrCodeScript';
/**
 * Hook returning the Html5QrcodeScanner instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCodeScanner(html5QrCodeScriptUrl) {
    var loaded = useHtml5QrCodeScript(html5QrCodeScriptUrl).loaded;
    var Html5QrcodeScanner = useMemo(function () { return window.Html5QrcodeScanner; }, [
        window.Html5QrcodeScanner,
    ]);
    return { Html5QrcodeScanner: Html5QrcodeScanner, loaded: loaded };
}
export default useHtml5QrCodeScanner;
