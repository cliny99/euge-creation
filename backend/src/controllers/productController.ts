import db from "../db/database";
import { Request, Response } from "express";

export const createProduct = (req: Request, res: Response) => {
  const { name, price, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Imagen requerida" });
  }

  const imageUrl = `/uploads/${req.file.filename}`;

  db.run(
    `INSERT INTO products (name, price, description, imageUrl)
     VALUES (?, ?, ?, ?)`,
    [name, price, description, imageUrl],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        id: this.lastID,
        name,
        price,
        description,
        imageUrl,
      });
    }
  );
};

export const getProducts = (req: Request, res: Response) => {
  db.all(`SELECT * FROM products`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
};