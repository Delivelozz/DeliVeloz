const {Router} = require("express")

const loginRouter= Router()

const loginHandler = require ("../handlers/login/loginHandler");

loginRouter.post("/", loginHandler);


module.exports = loginRouter;