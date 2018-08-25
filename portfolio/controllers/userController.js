var userModel = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function (req, res) {
        var user = new userModel({
			user_id : req.body.user_id,
			user_pw : req.body.user_pw,
			user_name : req.body.user_name,
			user_image : req.body.user_image,
			user_email : req.body.user_email,
			permission : req.body.permission,
			create_date : req.body.create_date,
			delete_date : req.body.delete_date

        });

        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }
            return res.status(201).json(user);
        });
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            user.user_id = req.body.user_id ? req.body.user_id : user.user_id;
			user.user_pw = req.body.user_pw ? req.body.user_pw : user.user_pw;
			user.user_name = req.body.user_name ? req.body.user_name : user.user_name;
			user.user_image = req.body.user_image ? req.body.user_image : user.user_image;
			user.user_email = req.body.user_email ? req.body.user_email : user.user_email;
			user.permission = req.body.permission ? req.body.permission : user.permission;
			user.create_date = req.body.create_date ? req.body.create_date : user.create_date;
			user.delete_date = req.body.delete_date ? req.body.delete_date : user.delete_date;
			
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
