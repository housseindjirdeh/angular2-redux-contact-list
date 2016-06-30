"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_store_1 = require('./contact-store');
var contact_1 = require('./contact');
var ContactList = (function () {
    function ContactList(store) {
        this.store = store;
    }
    ContactList.prototype.addContact = function (contact) {
        this.store.addContact(contact);
    };
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: 'app/contact-list.html',
            styleUrls: ['app/contact-list.css'],
            directives: [contact_1.default]
        }), 
        __metadata('design:paramtypes', [contact_store_1.ContactStore])
    ], ContactList);
    return ContactList;
}());
exports.ContactList = ContactList;
//# sourceMappingURL=contact-list.js.map