import { db } from "./dao/db.js";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.post("/signup", (req, res) => {
    // const sql = `INSERT INTO users( email, password ) VALUES(${req.body.email}, ${req.body.password})`;

    const sql = "INSERT INTO users( email, password ) VALUES(?)";
    const values = [
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }

        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Coucou je suis le server...");
});
