# react-html5-qrcode-reader
[![npm version](https://badge.fury.io/js/react-html5-qrcode-reader.svg)](https://badge.fury.io/js/react-html5-qrcode-reader)

A wrapper around html5-qrcode for react and SSR.

Check out [the demo page](https://briosheje.github.io/react-html5-qrcode-reader/)
for a live example. The source code of the example is available in the example
folder (`example/my-app`).

The current version only includes two hooks that automates the process of
including the html5-qrcode package, next versions will include wrapper
components meant to simplify the process of acquiring a QR code scan from the
html5-qrcode library.

# Motivation
The motivation behind this package is based on the fact that the original 
[html5-qrcode library](https://github.com/mebjas/html5-qrcode) offers react 
support but I had several difficulties including it in a next.js project.

Although the problem is mostly about including the library itself, using it as 
an NPM module did not work at all because the module is not ESM compatible.

This package serves as a solution for those who needs to use the html5-qrcode 
library in a react project but are unable to bundle a modular solution.

If you have any suggestion about cleverer / better ways to include the raw 
html5-qrcode library, please make a PR, the best I came up with is to inject 
in the head of the document the script pointing to the desired cdn.

If you want to see a working example, navigate to the `example` folder.

# Available hooks

To see real world example usages of the hooks below, check the Example Usage section.

- `useAvailableDevices`: returns the available devices to use for scanning.
- `useHtml5QrCode`: returns the `Html5Qrcode` instance of the html 5 qr code library..
- `useHtml5QrCodeScanner`: returns the `Html5QrcodeScanner` instance of the html 5 qr code library.

# Example Usage
Like the [html5-qrcode library package](https://github.com/mebjas/html5-qrcode),
you can either use the `Html5QrcodeScanner` or the `Html5Qrcode` approach.

Either way, use the desired hook, like the example below:

```tsx
import { useHtml5QrCodeScanner } from 'react-html5-qrcode-reader';

function YourComponent() {
  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(
    'url to the .min.js (see examples).'
  );

  useEffect(() => {
    if (Html5QrcodeScanner) {
      // Creates anew instance of `HtmlQrcodeScanner` and renders the block.
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

  // beware: id must be the same as the first argument of Html5QrcodeScanner
  return (
    <div id='reader'></div>
  );
}


```

# Testing
Please run the following to test the examples in the `example` folder if you
clone the repository:

- `npm link react`
- `npm link react-dom`
- Navigate to the example you want to test
- `cd node_modules/react && npm link`
- `cd node_modules/react-dom && npm link`

