/**
 * Provides helper methods for DOM elements.
 * @author Tim Sommer
 * @namespace Util
 * @class Events
 * facade
 */
var Util;
(function (Util) {
    var Events;
    (function (Events) {
        /**
         * Uses feature detection to remove an eventHandler to a supplied element
         * @method removeEventHandler
         * @param {HTMLElement} elem: The HtmlElement
         * @param {string} eventType: The type of event (eg. click, change, ..)
         * @param {handler} event: The eventHandler to detach
         */
        function removeEventHandler(elem, eventType, handler) {
            "use strict";
            if (elem.removeEventListener) {
                elem.removeEventListener(eventType, handler, false);
            }
            if (elem.detachEvent) {
                elem.detachEvent('on' + eventType, handler);
            }
        }
        Events.removeEventHandler = removeEventHandler;
        ;
        /**
         * Uses feature detection to add an eventHandler to a supplied element
         * @method removeEventHandler
         * @param {HTMLElement} elem: The HtmlElement
         * @param {string} eventType: The type of event (eg. click, change, ..)
         * @param {handler} event: The eventHandler to attach
         */
        function addEventHandler(elem, eventType, handler) {
            "use strict";
            if (elem.addEventListener) {
                elem.addEventListener(eventType, handler, false);
            }
            else if (elem.attachEvent) {
                elem.attachEvent("on" + eventType, handler);
            }
        }
        Events.addEventHandler = addEventHandler;
    })(Events = Util.Events || (Util.Events = {}));
})(Util || (Util = {}));
//# sourceMappingURL=events.js.map