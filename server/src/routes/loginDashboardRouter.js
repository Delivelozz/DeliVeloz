const {Router} = require("express")

const loginDashboardRouter= Router()

const loginDashboardHandler = require ("../handlers/loginDashboard/loginDashboardHandler");

loginDashboardRouter.post("/", loginDashboardHandler);


module.exports = loginDashboardRouter;