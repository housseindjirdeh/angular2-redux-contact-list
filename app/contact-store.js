"use strict";
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactStore = (function () {
    function ContactStore() {
        this.contacts = [];
    }
    ContactStore.prototype.addContact = function (newContact) {
        this.contacts.push({
            name: newContact
        });
    };
    return ContactStore;
}());
exports.ContactStore = ContactStore;
//# sourceMappingURL=contact-store.js.map