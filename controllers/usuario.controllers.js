const getUsers = (req, res) => {
    res.json({"message":"Homepage"});
};

const postUsers = (req, res) => {
    res.json({"message":"post api"});
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