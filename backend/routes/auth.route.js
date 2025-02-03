import express from "express";
import {
  login,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
  adminCheckAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/admin", verifyToken, isAdmin, adminCheckAuth);
export default router;
