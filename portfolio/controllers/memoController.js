var memoModel = require('../models/memoModel.js');

/**
 * memoController.js
 *
 * @description :: Server-side logic for managing memos.
 */
module.exports = {

    /**
     * memoController.list()
     */
    list: function (req, res) {
	console.log(1);
        memoModel.find(function (err, memos) {
	console.log(2);
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting memo.',
                    error: err
                });
            }
            return res.json(memos);
        });
    },

    /**
     * memoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        memoModel.findOne({_id: id}, function (err, memo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting memo.',
                    error: err
                });
            }
            if (!memo) {
                return res.status(404).json({
                    message: 'No such memo'
                });
            }
            return res.json(memo);
        });
    },

    /**
     * memoController.create()
     */
    create: function (req, res) {
        var memo = new memoModel({
			title : req.body.title,
			contents : req.body.contents,
			author : req.body.author,
			create_date : req.body.create_date,
			delete_date : req.body.delete_date

        });

        memo.save(function (err, memo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating memo',
                    error: err
                });
            }
            return res.status(201).json(memo);
        });
    },

    /**
     * memoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        memoModel.findOne({_id: id}, function (err, memo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting memo',
                    error: err
                });
            }
            if (!memo) {
                return res.status(404).json({
                    message: 'No such memo'
                });
            }

            memo.title = req.body.title ? req.body.title : memo.title;
			memo.contents = req.body.contents ? req.body.contents : memo.contents;
			memo.author = req.body.author ? req.body.author : memo.author;
			memo.create_date = req.body.create_date ? req.body.create_date : memo.create_date;
			memo.delete_date = req.body.delete_date ? req.body.delete_date : memo.delete_date;
			
            memo.save(function (err, memo) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating memo.',
                        error: err
                    });
                }

                return res.json(memo);
            });
        });
    },

    /**
     * memoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        memoModel.findByIdAndRemove(id, function (err, memo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the memo.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
