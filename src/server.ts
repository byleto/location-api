import express from 'express';
import { json } from 'body-parser';
import { locationRouter } from './routes/location.route';

const PORT = process.env.NODE_DOCKER_PORT || 8080;

const app = express();

app.use(json());
app.use(locationRouter);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

