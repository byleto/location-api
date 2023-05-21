import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.listen(3001, () => {
    console.log('listening on http://localhost/30001');
});

