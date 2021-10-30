/**
 * Hook returning the Html5Qrcode instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
declare function useHtml5QrCode(html5QrCodeScriptUrl: string): {
    Html5Qrcode: any;
    loaded: boolean;
};
export default useHtml5QrCode;
