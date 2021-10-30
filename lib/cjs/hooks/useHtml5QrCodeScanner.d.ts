/**
 * Hook returning the Html5QrcodeScanner instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
declare function useHtml5QrCodeScanner(html5QrCodeScriptUrl: string): {
    Html5QrcodeScanner: any;
    loaded: boolean;
};
export default useHtml5QrCodeScanner;
