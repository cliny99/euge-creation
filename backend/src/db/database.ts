import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    imageUrl TEXT NOT NULL
  )
`);

export default db;