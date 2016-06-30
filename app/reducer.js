"use strict";
var Immutable = require('immutable');
function reducer(state, action) {
    if (state === void 0) { state = Immutable.List(); }
    switch (action.type) {
        case 'ADD':
            return state.push({
                id: action.id,
                name: action.name,
                star: false
            });
        case 'REMOVE':
            return state.delete(findIndexById());
        case 'STAR':
            return state.update(findIndexById(), function (contact) {
                return {
                    name: contact.name,
                    star: !contact.star
                };
            });
        default:
            return state;
    }
    function findIndexById() {
        return state.findIndex(function (contact) { return contact.id === action.id; });
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map