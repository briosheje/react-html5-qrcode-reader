/**
 * Returns whether the specified script url exists already in the HEAD of the
 * current document.
 *
 * @param {string} scriptUrl entire url to look for (src).
 * @returns {boolean}
 */
function scriptExists(scriptUrl) {
    return Array.from(document.getElementsByTagName('script')).some(function (el) { return (el.src.includes(scriptUrl)); });
}
/**
 * Loads the desired scriptUrl if it is not already present in the HEAD of the
 * current document.
 *
 * If it is already included, `onLoaded` is raised immediately.
 *
 * @param {string} scriptUrl entire url to look for (src).
 * @param {OnDomScriptLoaded} onLoaded callback to invoke once the script is
 * loaded.
 */
function loadDomScript(scriptUrl, onLoaded) {
    if (!scriptExists(scriptUrl)) {
        var script_1 = document.createElement('script');
        script_1.type = 'text/javascript';
        script_1.crossOrigin = true;
        if (script_1.readyState) {
            script_1.onreadystatechange = function onreadystatechange() {
                if (script_1.readyState === 'loaded' || script_1.readyState === 'complete') {
                    script_1.onreadystatechange = null;
                    onLoaded();
                }
            };
        }
        else {
            script_1.onload = function () { return onLoaded(); };
        }
        script_1.src = scriptUrl;
        document.getElementsByTagName('head')[0].appendChild(script_1);
    }
    else {
        onLoaded();
    }
}
export default loadDomScript;
