import { Router } from 'express';
import { getUsers, postUsers, deleteUsers, putUsers, patchUsers } from '../controllers/usuario.controllers.js';

const router = Router();

router.get("/", getUsers);
router.post("/", postUsers);
router.delete("/", deleteUsers);
router.put("/", putUsers);
router.patch("/", patchUsers);

export default router;