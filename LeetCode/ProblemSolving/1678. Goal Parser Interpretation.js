/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.replace(/\(\)/g, 'o');
    command = command.replace(/\(al\)/g, 'al');
    return command;
};