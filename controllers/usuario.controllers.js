import Usuario from "../models/Usuario.js";

const getUsers = (req, res) => {
    res.json({"message":"Homepage"});
};

const postUsers = async (req, res) => {
    try {
        const body = req.body;
        const user = new Usuario(body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(300).send(error.message);
    }
};

const deleteUsers = (req, res) => {
    res.json({"message":"delete api"});
};

const putUsers = (req, res) => {
    res.json({"message":"put api"});
};

const patchUsers = (req, res) => {
    res.json({"message":"patch api"});
};

export  {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}