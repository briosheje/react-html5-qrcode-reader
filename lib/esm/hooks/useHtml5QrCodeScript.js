import { useEffect, useState } from 'react';
import loadDomScript from '../utils/loadDomScript';
function useHtml5QrCodeScript(scriptUrl) {
    var _a = useState(false), loaded = _a[0], setLoaded = _a[1];
    // Include the script if it is not already included.
    useEffect(function () {
        loadDomScript(scriptUrl, function () {
            setLoaded(true);
        });
    }, []);
    return { loaded: loaded };
}
export default useHtml5QrCodeScript;
