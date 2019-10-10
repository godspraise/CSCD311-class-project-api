const express =require ('express');
const hostel_router = new express.Router();
const mongoose = require ('mongoose');
const Hostel = require('./hostel');
const Room = require('./room')
require('../connection/connection')



hostel_router.get('/hostels',async (req,res)=>{

    try {   
        const hostels = await Hostel.find({})
        res.send(hostels);
        
    } catch (error) {
        res.status(500).send(error)
        
    }
})


hostel_router.post('/hostels',async(req,res)=>{

    try {
        const hostel = new Hostel(req.body);
        await hostel.save()
        res.status(201).send(hostel)
    
    } catch (error) {
        res.status(500).send(error)    
    }

})


hostel_router.get('/hostels/:id', async(req,res)=> {

    try {
        const hostel = await Hostel.findById(req.params.id)
        res.send(hostel)
    } catch (error) {
        res.status(500).send(error)
    }
})



hostel_router.post('/:hostelid/rooms/',async(req,res)=>{

    try {
        const hostel = await Hostel.findById(req.params.hostelid)
        if (!hostel) {
            throw new Error()
        }

        const room = new Room({
            ...req.body,
            hall: hostel._id
        
        });

        await room.save()
        res.status(201).send()
    
    } catch (error) {
        res.status(500).send(error)    
    }
})

hostel_router.get('/:hostelid/rooms/', async(req,res)=>{
    try {
        const hostel = await Hostel.findById(req.params.hostelid)
        if (!hostel) {
            throw new Error()
        }

        const rooms = await Room.find({
            hall: hostel._id
        }) 

        res.send(rooms)
    } catch (e) {
        res.status(500).send(e)        
    }
})

hostel_router.post('/:student/register/:room', async(req,res)=>{
    try {
        const student = await Student.findById(req.params.student)
        const room = await Room.findById(req.params.room)

        if (!student || !room) {
            throw new Error()
        }

        const hostel = await Hostel.findById(room.hall)
        
        student.is_assigned = true
        student.room = room._id
        room.occupants = room.occupants.concat([student._id])
        hostel.numberOfOccupants++

        await student.save()
        await hostel.save()
        await room.save()

        res.send({
            student,
            hostel,
            room
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = hostel_router;