import express from 'express';
import { json } from 'body-parser';
import { locationRouter } from './routes/location.route';

const app = express();

app.use(json());
app.use(locationRouter);

app.listen(3001, () => {
    console.log('listening on http://localhost/30001');
});

