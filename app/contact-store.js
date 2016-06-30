"use strict";
var Immutable = require('immutable');
var redux_1 = require('redux');
var reducer_1 = require('./reducer');
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var ContactStore = (function () {
    function ContactStore() {
        this.store = redux_1.createStore(reducer_1.reducer, Immutable.List());
    }
    Object.defineProperty(ContactStore.prototype, "contacts", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    ContactStore.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    return ContactStore;
}());
exports.ContactStore = ContactStore;
//# sourceMappingURL=contact-store.js.map