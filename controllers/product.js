import { db } from "../dao/db.js";

export const getProducts = (req, res) => {
    const sql = "SELECT products.*, categories.name FROM products LEFT JOIN categories ON categories.id = products.category_id";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    })
}

export const createProduct = (req, res) => {
    const {name, ref, descriptiom, price, category_id, image} = req.body

db.query(
    "INSERT INTO products(name, ref, descriptiom, price, category_id, image) VALUES(?,?,?,?,?)", 
    [name, ref, descriptiom, price, category_id, image],
    (err) => {
        if (err) return res.status(500).json(err)
            res.json()
    }
)

}

export const updateProduct = (req, res) => {
    const {name, ref, description, price, category_id, image, id} = req.body;

    db.query(
        "UPDATE products SET name=?, ref=?, description=?, price=?, category_id=?, image=? WHERE id=?",
        [name, ref, description, price, category_id, image, id],
        (err) => {
            if(err) return res.status(500).json(err);
            res.json({"msg":"Produit modifie"});
        }
    )
}

export const deleteProduct = (req, res) => {
    db.query("DELETE FROM product WHERE id=?", [req.params.id], (err)=>{
        if(err) res.status(500).json(err);
        res.json({"msg":"Produit supprime"});
    })
}
