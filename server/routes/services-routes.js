import express from 'express';
import servicesController from "../controllers/services-controllers.js";

const router = express.Router();

router.use("/", servicesController);


export default router;