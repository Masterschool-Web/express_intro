import express from "express";
const router = express.Router();
import {getAll, getByBirthMonth, getByBloodType, getById, getMatches} from "../models/characters.js";

router.get("/", (req, res) => {
    res.send(getAll());
});
router.get("/match", (req, res) => {
    const result = getMatches()
    res.send(result);
});
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const result = getById(id)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/birth/:month", (req, res) => {
    const { month } = req.params;
    if (!month) {
        return res.status(400).send("Didn't you read the requirements? What's wrong with you?");
    }
    const result = getByBirthMonth(month)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/blood-type/:type", (req, res) => {
    const { type } = req.params;
    if (!type) {
        return res.status(400).send("Didn't you read the requirements? What's wrong with you?");
    }
    if (type.toLowerCase() === 'blood') {
        return res.status(400).send("Everyone has blood in them, you moron !");
    }
    const result = getByBloodType(type)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

export { router as characterRouter };