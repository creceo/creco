var express = require('express');
var router = express.Router();
var memoController = require('../controllers/memoController.js');

/*
 * GET
 */
router.get('/', memoController.list);

/*
 * GET
 */
router.get('/:id', memoController.show);

/*
 * POST
 */
router.post('/', memoController.create);

/*
 * PUT
 */
router.put('/:id', memoController.update);

/*
 * DELETE
 */
router.delete('/:id', memoController.remove);

module.exports = router;
