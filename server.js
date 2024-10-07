import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/WeekMenu/:campusName', (req, res) => {
    const campusName = req.params.campusName;
    axios.get(`https://tmmenumanagement.azurewebsites.net/api/WeekMenu/${campusName}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error fetching data from the API');
        });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Proxy server started on port ${PORT}`);
});