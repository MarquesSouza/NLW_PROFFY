import express from 'express';
import db from './database/connection';

const routes =express.Router();


routes.post('/classes',async (request,response)=>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    }= request.body;

    await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    }).catch((message)=>{
        response.json(message)
    });
    return response.send();
});

export default routes;