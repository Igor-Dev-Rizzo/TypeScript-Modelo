import express from "express"

const app = express()

app.get("/", (req, res) =>{
    return res.json({message: "Olá mundo!"})
})

app.listen(3333, ()=>{
    console.log("Servidor sendo executado na porta 3333!")
})