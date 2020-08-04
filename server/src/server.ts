import express from 'express';

const app= express();

app.use(express.json())

app.post('/',(request,response)=>{
    return response.json("Helow");
});

app.listen(3333);