import express from "express";
import PetController from "../controller/PetController.js";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet.bind(petController));

export default router