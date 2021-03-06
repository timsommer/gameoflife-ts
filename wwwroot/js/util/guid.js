/**
 * Util.Guid is a static (virtual) object that can generate GUIDs.
 * @author Tim Sommer
 * @namespace Util
 * @class Guid
 */
var Util;
(function (Util) {
    var Guid;
    (function (Guid) {
        /**
        * Generates part of the Guid
        * @method hexa4
        * @return part of the guid
        */
        function hexa4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        ;
        /**
        * Generates the Guid
        * @method generateGuid
        * @return the actual guid
        */
        function generateGuid() {
            var guid = (hexa4() + hexa4() + "-" + hexa4() + "-" + hexa4() + "-" + hexa4() + "-" + hexa4() + hexa4() + hexa4()).toUpperCase();
            console.info("guid == " + guid);
            return guid;
        }
        Guid.generateGuid = generateGuid;
        ;
    })(Guid = Util.Guid || (Util.Guid = {}));
})(Util || (Util = {}));
//# sourceMappingURL=guid.js.map