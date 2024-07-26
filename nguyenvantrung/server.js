const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/users', async (req, res) => {
    const { page = 1 } = req.query;
    try {
        const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
