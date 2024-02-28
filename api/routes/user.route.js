import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  userUpdate,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, userUpdate);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getUsers", verifyToken, getUsers);
router.get("/:userId", getUser);

export default router;
