/**
 * Util.Guid is a static (virtual) object that can generate GUIDs.
 * @author Tim Sommer
 * @namespace Util
 * @class Guid
 */
namespace Util.Guid {

  /**
  * Generates part of the Guid
  * @method hexa4
  * @return part of the guid
  */
  function hexa4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };


  /**
  * Generates the Guid
  * @method generateGuid
  * @return the actual guid
  */
  export function generateGuid() {
    var guid = (hexa4() + hexa4() + "-" + hexa4() + "-" + hexa4() + "-" + hexa4() + "-" + hexa4() + hexa4() + hexa4()).toUpperCase();
    console.info("guid == " + guid);
    return guid;
  };
}