var privateRouter 	= require("express").Router()
var publicRouter 	= require("express").Router()

require('./user')(privateRouter)

// auth router
require('./auth')(publicRouter)

module.exports ={
	private: privateRouter,
	public: publicRouter
}