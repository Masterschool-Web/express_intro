import express from "express";
const router = express.Router();
import {getAll, getByHouse, getById, getByNickname} from "../models/external.js";

router.get("/", async (req, res) => {
    res.send(await getAll());
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await getById(id)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});
router.get("/nick/:nick", async (req, res) => {
    const { nick } = req.params;
    if (!nick) {
        return res.status(400).send("Didn't you read the requirements? What's wrong with you?");
    }
    const result = await getByNickname(nick)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});
router.get("/house/:house", async (req, res) => {
    const { house } = req.params;
    if (!house) {
        return res.status(400).send("Didn't you read the requirements? What's wrong with you?");
    }
    const result = await getByHouse(house)
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});


export { router as externalRouter };