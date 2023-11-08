    //get the express module
    const express = require('express')
    //get helmet module
    const helmet = require('helmet')
    //set a variable to hold the value of this instance of the server
    const app = express()
    const cors = require("cors")
    const path = require('path')

    //use helmet 
    app.use(helmet())

    app.use(cors({
        origin: ["http://localhost:3000", "https://itunes-search-app.onrender.com"]
    }))


    //get method for getting information from the api. Uses /search as the path parameter, and is an async function because it uses the fetch api
    app.get ('/search', async (req, res) => {

        //get term and entity from request object's query
        const { term, entity } = req.query

        
        console.log(req.query)
        //variable to hold value of api endpoint for request
        //the term is the term is set to the term prop from the request object query, the entity is the entity prop 
        const apiUrl = `https://itunes.apple.com/search?term=${term}&entity=${entity}`
    
        //response variable to hold response from api call
        const response = await fetch(apiUrl)
        //data to hold data from response
        const data = await response.json()
        //send data back as response 
        res.send(data)
        
    })

    //PORT variable is used to hold value of port for server to listen on. either process.env.PORT for port of environment, or use 3001
    //80
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });

    module.exports = app;


