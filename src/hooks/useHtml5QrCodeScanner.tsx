import { useMemo } from 'react';

import useHtml5QrCodeScript from './useHtml5QrCodeScript';

/**
 * Hook returning the Html5QrcodeScanner instance.
 *
 * @param {string} html5QrCodeScriptUrl URL to the html5-qr-code compiled
 * library.
 * @returns
 */
function useHtml5QrCodeScanner(html5QrCodeScriptUrl: string) {
  const { loaded: html5QrcodeScriptLoaded } = useHtml5QrCodeScript(
    html5QrCodeScriptUrl,
  );

  const Html5QrcodeScanner = useMemo(() => {
    if (html5QrcodeScriptLoaded) {
      return (window as any).Html5QrcodeScanner;
    }

    return undefined;
  }, [html5QrcodeScriptLoaded]);

  return { Html5QrcodeScanner };
}

export default useHtml5QrCodeScanner;
