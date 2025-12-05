const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "ecommerce"
})

app.post("/signup", (req, res) => {
    const sql = `INSERT INTO users(email,password) VALUES(?);`
    const values = [
        req.body.email,
        req.body.password
    ]
        
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json(err)
        }
        return res.json.data
    })
})
app.post("/signin", (req, res) => {
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    const values = [
        req.body.email,
        req.body.password
    ]
        
    db.query(sql, values, (err, data) => {
        if(err) {
            return res.json(err)
        } else {
             return res.json(data.length > 0)
        }
       
    })
})

app.listen(8081, () =>
    console.log("Coucou je suis le server..")
)