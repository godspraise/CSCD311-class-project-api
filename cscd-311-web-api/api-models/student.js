const express = require('express')
const student_router = new express.Router()
const mongoose = require('mongoose')
const Student = require('../models/student')
require('../connection/connection')



student_router.get('/students', async ( req,res )=>{
    try {
        const students = await Student.find({})
        res.send(students)
    } catch (error) {
        res.status(500).send(error)
    }
})


student_router.post('/students' , async ( req,res) =>{
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(201).send(student)
    } catch (error) {
        res.status(500).send(error)       
    }
} )


student_router.get('/students/:id', async(req,res)=>{
    try {
        const student = await Student.findById(req.params.id)
        res.send(student)
    } catch (error) {
        res.status(500).send(error)   
    }
})


module.exports = student_router

