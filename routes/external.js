import express from "express";
const router = express.Router();

router.get("/characters/",  (req, res) => {
    // return all characters
});

router.get("/spells/",  (req, res) => {
    // return all spells
});

router.get("/characters/:id",  (req, res) => {
    const { id } = req.params;
    // return character with the given ID
});

router.get("/spells/:id",  (req, res) => {
    const { id } = req.params;
    // return spell with the given ID
});

router.get("/characters/nick/:nick", async (req, res) => {
    const { nick } = req.params;
    // return all characters with the provided nickName. Make it case-insensitive
});
router.get("/characters/house/:house", async (req, res) => {
    const { house } = req.params;
    // return all characters with the provided hogwartsHouse. Make it case-insensitive
});


export { router as externalRouter };