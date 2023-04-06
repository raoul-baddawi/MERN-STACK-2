const express = require('express');
const router = express.Router();
const { getLink, setLink, updateLink, deleteLink } = require('../controllers/links-controllers.js');

router.route('/').get(getLink).post(setLink);
router.route('/:id').put(updateLink).delete(deleteLink)

module.exports = router;