# react-html5-qrcode-reader
A wrapper around html5-qrcode for react and SSR.

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

# Usage
Like the [html5-qrcode library package](https://github.com/mebjas/html5-qrcode),
you can either use the ``
