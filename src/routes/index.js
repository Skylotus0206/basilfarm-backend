import express from 'express';

const router = express.Router();

import actuatorRouter from './actuator.js';
import sensorRouter from './sensor.js';
import userRouter from './user.js';
import autoRouter from './auto.js';
import commandRouter from './command.js';
import deviceRouter from './device.js';

router.use('/sensors', sensorRouter);
router.use('/actuators', actuatorRouter);
router.use('/user', userRouter);
router.use('/auto', autoRouter);
router.use('/command', commandRouter);
router.use('/device', deviceRouter);

export default router;
