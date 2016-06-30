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
var Contact = (function () {
    function Contact(store) {
        this.store = store;
    }
    Contact.prototype.removeContact = function (contact) {
        this.store.removeContact(contact);
    };
    Contact.prototype.starContact = function (contact) {
        this.store.starContact(contact);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof contact_store_1.Contact !== 'undefined' && contact_store_1.Contact) === 'function' && _a) || Object)
    ], Contact.prototype, "contact", void 0);
    Contact = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: 'app/contact.html',
            styleUrls: ['app/contact.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [contact_store_1.ContactStore])
    ], Contact);
    return Contact;
    var _a;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Contact;
//# sourceMappingURL=contact.js.map