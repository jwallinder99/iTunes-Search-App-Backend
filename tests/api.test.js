//get supertest module for testing http methods of server
const request = require('supertest');
const express = require('express');
const app = require('../server'); 

//api endpoints description
describe('API Endpoints', () => {

  it('should respond with JSON data when querying the "/search" endpoint', async () => {
    //get response from app (the server)
    const response = await request(app)
        //specify method
      .get('/search')
      //use dummy data for query
      .query({ term: 'jack+johnson', entity: 'musicVideo' });
    //expect the status code to be 200
    expect(response.statusCode).toBe(200);
    //expect the type of response to be application / json
    expect(response.type).toEqual('application/json');
    //expect there to be a property called results
    expect(response.body).toHaveProperty('results');
   
  });
});
