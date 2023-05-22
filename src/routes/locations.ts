import { Router } from 'express';

import { createLocation, deleteLocation, getAllLocations } from '../controllers/locations';

const router = Router();

router.post('/location/', createLocation);

router.get('/locations', getAllLocations);

router.delete('/location/:id', deleteLocation);

export default router;
