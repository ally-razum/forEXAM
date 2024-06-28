const router = require('express').Router();
const mainRouter = require('./main.routes');


router.use('/', mainRouter);



module.exports = router;
