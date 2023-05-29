/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address = address.replace(/\./g,'[.]');
    return address
};