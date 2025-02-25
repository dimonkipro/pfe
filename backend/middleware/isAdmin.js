import { User } from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
  try {
    // Fetch user without password 
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if user is admin
    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Admin access required",
      });
    }

    // Attach user to request object for subsequent handlers
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in checkAdmin middleware:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
