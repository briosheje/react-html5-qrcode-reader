import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useHtml5QrCodeScanner, useAvailableDevices } from 'react-html5-qrcode-reader';

const html5QrCodeScannerFile = process.env.PUBLIC_URL + '/html5-qrcode.min.js'; // <-- this file is in /public.

function App() {
  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(
    html5QrCodeScannerFile
  );
  const { devices, error } = useAvailableDevices(
    html5QrCodeScannerFile
  );

  useEffect(() => {
    if (Html5QrcodeScanner) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
      html5QrcodeScanner.render(
        (data: any) => console.log('success ->', data), 
        (err: any) => console.log('err ->', err)
      );
    }
  }, [Html5QrcodeScanner]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='reader'></div>
        {error && `Devices error: ${error}`}
        {devices && (
          <div>
            <span>Available devices are:</span>
            <ul>
              {devices.map(v => (
                <li>
                  id: {v.id}<br />
                  label: {v.label}
                </li>
              ))}
            </ul>
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
