const { Router } = require("express");

const filterRouter = Router();
// import hadlers
const getFilterHandler = require('../handlers/filters/getFilterHandler');

// use handlers
filterRouter.get('/:category/:price', getFilterHandler);

module.exports = filterRouter;