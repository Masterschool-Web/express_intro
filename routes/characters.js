import express from "express";
const router = express.Router();
import {getAll, getByBirthMonth, getByBloodType, getById, getMatches, getByName, getByQuery} from "../models/characters.js";

router.get("/", (req, res) => {
    res.send(getAll());
});

router.get("/search", (req, res) => {
    console.log(req.query)
    if(!req.query) {
        return res.status(400).send("Oops...Didn't see that one coming");
    }

    let result;
    if (req.query.id) {
        result = getById(req.query.id)
    } else if (req.query.name) {
        result = getByName(req.query.name)
    }  else if (req.query.birth) {
        result = getByBirthMonth(req.query.birth)
    } else if (req.query.blood) {
        result = getByBloodType(req.query.blood)
    } else {
        result = null
    }
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});

router.get("/compoundSearch", (req, res) => {
    console.log(req.query)
    if(!req.query) {
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    const result = getByQuery(req.query)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
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