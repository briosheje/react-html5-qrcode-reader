export type OnDomScriptLoaded = () => void;

/**
 * Returns whether the specified script url exists already in the HEAD of the
 * current document.
 *
 * @param {string} scriptUrl entire url to look for (src).
 * @returns {boolean}
 */
function scriptExists(scriptUrl: string): boolean {
  return Array.from(document.getElementsByTagName('script')).some((el) => (
    el.src.includes(scriptUrl)
  ));
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
function loadDomScript(scriptUrl: string, onLoaded: OnDomScriptLoaded) {
  if (!scriptExists(scriptUrl)) {
    const script: any = document.createElement('script');
    script.type = 'text/javascript';
    script.crossOrigin = true;

    if (script.readyState) {
      script.onreadystatechange = function onreadystatechange() {
        if (
          script.readyState === 'loaded' || script.readyState === 'complete'
        ) {
          script.onreadystatechange = null;
          onLoaded();
        }
      };
    } else {
      script.onload = () => onLoaded();
    }

    script.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    onLoaded();
  }
}

export default loadDomScript;
