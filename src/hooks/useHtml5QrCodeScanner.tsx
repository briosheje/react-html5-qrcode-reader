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
  const { loaded } = useHtml5QrCodeScript(
    html5QrCodeScriptUrl,
  );

  const Html5QrcodeScanner = useMemo(() => (window as any).Html5QrcodeScanner, [
    (window as any).Html5QrcodeScanner,
  ]);

  return { Html5QrcodeScanner, loaded };
}

export default useHtml5QrCodeScanner;
