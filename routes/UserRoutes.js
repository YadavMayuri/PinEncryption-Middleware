import express from "express";
import {  ChangeAddress, ChangeEmail, ChangeName, ChangeNumber, ChangePanNumber, ChangePassword, login, register } from "../controllers/UsersControllers.js";
import { CheckPin, registrationCheck } from "../middlewares/authMiddleware.js";


var router = express.Router();



router.post('/register',registrationCheck, register);
router.post('/login', login);

router.post('/ChangeNumber',CheckPin, ChangeNumber);
router.post('/ChangeEmail',CheckPin, ChangeEmail);
router.post('/ChangeAddress',CheckPin, ChangeAddress);
router.post('/ChangePanNumber',CheckPin, ChangePanNumber);
router.post('/ChangeName',CheckPin, ChangeName);
router.post('/ChangePassword',CheckPin, ChangePassword);







export default router;