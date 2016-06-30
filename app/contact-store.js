"use strict";
var Immutable = require('immutable');
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactStore = (function () {
    function ContactStore() {
        this.contacts = Immutable.List(Contact);
    }
    ContactStore.prototype.addContact = function (newContact) {
        this.contacts = this.contacts.push({
            name: newContact,
            star: false
        });
    };
    ContactStore.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts = this.contacts.delete(index);
    };
    ContactStore.prototype.starContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts = this.contacts.update(index, function (contact) {
            return {
                name: contact.name,
                star: !contact.star
            };
        });
    };
    return ContactStore;
}());
exports.ContactStore = ContactStore;
//# sourceMappingURL=contact-store.js.map