var date = new Date();
var connection = require('./../models/databaseConnection');
var path = require('path');
var request = require('request');

module.exports = {
    'customerList': function (req, res) {
        connection.query('SELECT * from oc_customer', function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'customerDetail': function (req, res) {
        var customer_id = req.query.id;
        connection.query('SELECT * from oc_customer where customer_id = ?', customer_id, function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'userList': function (req, res) {
        connection.query('SELECT * from oc_user', function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'userDetail': function (req, res) {
        var user_id = req.query.id;
        connection.query('SELECT * from oc_user where user_id = ?',user_id, function (err, rows) {
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'newCustomer': function (req, res) {
        var customerData = {
            customer_group_id : req.body.group_id,
            store_id : req.body.store_id,
            language_id : req.body.language_id,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            telephone: req.body.telephone,
            fax : req.body.fax,
            password : req.body.password,
            salt : req.body.salt,
            cart : req.body.cart,
            wishlist : req.body.wishlist,
            newsletter : req.body.newsletter,
            address_id: req.body.address_id,
            custom_field : req.body.custom_field,
            ip : req.body.ip,
            status : 1,
            safe : req.body.safe,
            token : req.body.token,
            code : req.body.code,
            date_added : req.body.date
        };
        connection.query('INSERT INTO oc_customer set ?', customerData, function(req, res){
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'newUser' : function (req, res){
        var userData = {
            username : req.body.username,
            user_group_id : req.body.group_id,
            salt : req.body.salt,
            password : req.body.password,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            image : req.body.image,
            status : req.body.status,
            date_added : req.body.date
        };
        connection.query('INSERT INTO oc_user set ?', userData, function(req, res){
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'editUser' : function(req, res){
        var id = req.query.id;
        var user;
        if(req.body.username != null){
            user.username = req.body.username
        }
        if(req.body.group_id != null) {
            user.user_group_id = req.body.group_id
        }
        if(req.body.firstname != null){
            user.firstname = req.body.firstname
        }
        if(req.body.lastname != null){
            user.lastname = req.body.lastname
        }
        if(req.body.email != null){
            user.email = req.body.email
        }
        if(req.body.image != null){
            user.image = req.body.image
        }
        if(req.body.status != null){
            user.status = req.body.status
        }
        if(req.body.password != null){
            user.password = req.body.password,
                user.salt = req.body.salt
        }
        connection.query('UPDATE oc_user SET ? WHERE user_id = ?', [user, id], function(req, res){
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'editCustomer' : function(req, res){
        var id = req.query.id;
        var customer;
        if(req.body.group_id != null) {
            customer.customer_group_id = req.body.group_id
        }
        if(req.body.firstname != null) {
            customer.firstname = req.body.firstname
        }
        if(req.body.lastname != null) {
            customer.lastname = req.body.lastname
        }
        if(req.body.email != null) {
            customer.email = req.body.email
        }
        if(req.body.telephone != null) {
            customer.telephone = req.body.telephone
        }
        if(req.body.custom_field != null) {
            customer.custom_field = req.body.custom_field
        }
        if(req.body.newsletter != null) {
            customer.newsletter = req.body.newsletter
        }
        if(req.body.status != null) {
            customer.status = req.body.status
        }
        if(req.body.safe != null) {
            customer.safe = req.body.safe
        }
        if(req.body.password != null) {
            customer.password = req.body.password
        }
        if(req.body.address != null) {
            customer.address = req.body.address;
        }
        connection.query('UPDATE oc_customer SET ? WHERE customer_id = ?', [id], function(req, res){
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'deleteUSer' : function(req, res) {
        var id = req.query.id;
        connection.query('DELETE FROM oc_user WHERE user_id = ?', id, function(req, res){
            if(err){
                res.status(500).send(err);
            } else {
                res.status(200).json(rows);
            }
        });
    },
    'deleteCustomer' : function(req, res){
        var id = req.query.id;
    }
};