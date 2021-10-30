import { useEffect, useState } from 'react';

import useHtml5QrCode from './useHtml5QrCode';

export interface AvailableDevice {
  id: string;
  label: string;
}

function useAvailableDevices(scriptUrl: string) {
  const { Html5Qrcode } = useHtml5QrCode(scriptUrl);

  const [devices, setDevices] = useState<AvailableDevice[] | undefined>(
    undefined,
  );
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    if (Html5Qrcode) {
      Html5Qrcode.getCameras().then((cameras: any) => {
        setDevices(cameras);
      }).catch((getCamerasError: any) => {
        setError(getCamerasError);
      });
    }
  }, [Html5Qrcode]);

  return { devices, error };
}

export default useAvailableDevices;
