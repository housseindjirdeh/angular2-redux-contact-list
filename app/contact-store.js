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
            name: newContact,
            star: false
        });
    };
    ContactStore.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    ContactStore.prototype.starContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts[index].star = !this.contacts[index].star;
    };
    return ContactStore;
}());
exports.ContactStore = ContactStore;
//# sourceMappingURL=contact-store.js.map