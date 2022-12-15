import express from "express";
const router = express.Router();
import characters from "../characters.json" assert { type: "json" };

router.get("/", (req, res) => {
    res.send(characters);
});
router.get("/match", (req, res) => {
    const chunks = chunk(shuffle(characters), 6)
    console.log(chunks.length)
    const result = {
        match1: [[...chunks[0]], [...chunks[1]]],
        match2: [[...chunks[2]], [...chunks[3]]],
        referees:  [...chunks[4]]
    }
    res.send(result);
});
router.get("/:id", (req, res) => {
    const result = characters.find((c) => c.id === parseInt(req.params.id))
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
    const result = characters.filter((c) => c.born.toLowerCase().includes(month.toLowerCase()))
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
    const result = characters.filter((c) => c.blood.toLowerCase().includes(type.toLowerCase()))
    if (!result){
        return res.status(400).send("Oops...Didn't see that one coming");
    }
    res.send(result);
});


function chunk (items, size) {
    const chunks = []
    items = [].concat(...items)
    while (items.length) {
        chunks.push(
            items.splice(0, size)
        )
    }
    return chunks
}
function shuffle (array)
{
    let last = array.length
    let n
    while (last > 0)
    {
        n = rand(last)
        swap(array, n, --last)
    }
    return array
}

const rand = n =>
    Math.floor(Math.random() * n)

function swap (array, i, j)
{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}

export { router as characterRouter };