import { useEffect, useState } from 'react';
import loadDomScript from '../utils/loadDomScript';

function useHtml5QrCodeScript(scriptUrl: string) {
  const [loaded, setLoaded] = useState(false);

  // Include the script if it is not already included.
  useEffect(() => {
    loadDomScript(scriptUrl, () => {
      setLoaded(true);
    });
  }, []);

  return { loaded };
}

export default useHtml5QrCodeScript;
