import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
    try {
      const student = await db.query('SELECT * FROM student ORDER BY id');
      res.send(student);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



export default router;