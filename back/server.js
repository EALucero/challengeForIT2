import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
});

app.get('/api/tasks', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result);
    });
});

app.post('/api/tasks', (req, res) => {
    const sql = `INSERT INTO tasks (title, description, completed, createdAt) VALUES (?)`;
    const values = [
        req.body.title,
        req.body.description,
        req.body.completed,
        req.body.createdAt
    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result);
    });
})

app.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        console.log(result);

        return res.json(result);
    });
});

app.put('/:id', (req, res) => {
    const sql = 'UPDATE tasks SET `title`=?, `description`=?, `completed`=? WHERE id=?';
    const id = req.params.id;

    db.query(sql, [req.body.title, req.body.description, req.body.completed, id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result);
    });
})

app.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" })
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});