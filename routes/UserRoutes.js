import express from "express";
import {  ChangeAddress, ChangeEmail, ChangeNumber, ChangePanNumber, register } from "../controllers/UsersControllers.js";
import { CheckPin, registrationCheck } from "../middlewares/authMiddleware.js";


var router = express.Router();



router.post('/register',registrationCheck, register);
router.post('/ChangeNumber',CheckPin, ChangeNumber);
router.post('/ChangeEmail',CheckPin, ChangeEmail);
router.post('/ChangeAddress',CheckPin, ChangeAddress);
router.post('/ChangePanNumber',CheckPin, ChangePanNumber);














export default router;