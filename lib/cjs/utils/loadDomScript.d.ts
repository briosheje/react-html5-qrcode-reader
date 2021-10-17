export declare type OnDomScriptLoaded = () => void;
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
declare function loadDomScript(scriptUrl: string, onLoaded: OnDomScriptLoaded): void;
export default loadDomScript;
