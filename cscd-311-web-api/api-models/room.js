const express = require('express');
const room_router = new express.Router;
const mongoose = require ('mongoose');

const Hostel = require('./room');
require('../connection/connection')


room_router.get('/room', async(req,res) =>{
    try {
        const rooms = await Room.find({})
        res.send(rooms);
          
    } catch (error) {
        
        res.status(500).send(error)
        
    }
})


