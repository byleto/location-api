import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/location', (req: Request, res: Response) => {
  return res.send('the location');
});

router.post('/api/location', (req: Request, res: Response) => {
  return res.send('new location created');
});

export { router as locationRouter };
