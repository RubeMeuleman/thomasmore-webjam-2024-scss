import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/api/WeekMenu/:campusName', (req, res) => {
    const campusName = req.params.campusName;
    const apiUrl = `https://tmmenumanagement.azurewebsites.net/api/WeekMenu/${campusName}`;

    axios.get(apiUrl)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error fetching from the API');
        });
});

app.listen(3000, () => {
    console.log('Proxy server started on port 3000');
});