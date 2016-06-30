"use strict";
function addContact(name, id) {
    return {
        type: 'ADD',
        id: id,
        name: name
    };
}
exports.addContact = addContact;
function removeContact(id) {
    return {
        type: 'REMOVE',
        id: id
    };
}
exports.removeContact = removeContact;
function starContact(id) {
    return {
        type: 'STAR',
        id: id
    };
}
exports.starContact = starContact;
//# sourceMappingURL=actions.js.map