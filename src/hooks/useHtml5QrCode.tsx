import { useMemo } from 'react';

import useHtml5QrCodeScript from './useHtml5QrCodeScript';

/**
 * Hook returning the Html5Qrcode instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCode(html5QrCodeScriptUrl: string) {
  const { loaded: html5QrcodeScriptLoaded } = useHtml5QrCodeScript(
    html5QrCodeScriptUrl,
  );

  const Html5Qrcode = useMemo(() => {
    if (html5QrcodeScriptLoaded) {
      return (window as any).Html5Qrcode;
    }

    return undefined;
  }, [html5QrcodeScriptLoaded]);

  return { Html5Qrcode };
}

export default useHtml5QrCode;
