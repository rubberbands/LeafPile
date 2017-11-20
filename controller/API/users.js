var users = require('../../models/users.js');

module.exports = function (app) {

    app.get('/api/v1/customerList',users.customerList);
    app.get('/api/v1/userList',users.userList);
    app.get('/api/v1/userDetail', users.userDetail);
    app.get('/api/v1/customerDetail', users.customerDetail);
    app.post('api/v1/newUser', users.newUser);
    app.post('api/v1/newCustomer', users.newCustomer);
    app.post('api/v1/editUser', users.editUser);
    app.post('api/v1/editCustomer', users.editCustomer);
};
