import express from "express";
import PetController from "../controller/PetController.js";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet.bind(petController));
router.get("/", petController.listaPets.bind(petController));
router.put("/:id", petController.atualizaPet.bind(petController));
router.delete("/:id", petController.deletaPet.bind(petController));
/* 
OU
router.post("/", (req, res) => {
  petController.criaPet(req, res);
});
router.get("/", (req, res) => {
  petController.listaPets(req, res);
});
router.put("/:id", (req, res) => {
  petController.atualizaPet(req, res);
});
router.delete("/:id", (req, res) => {
  petController.deletaPet(req, res);
});
*/

export default router;