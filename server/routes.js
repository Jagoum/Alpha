const express = require("express");
const passport = require("passport");
const { createPaymentSession } = require("./payment");

const router = express.Router();

// Google OAuth login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"],  }));

// Google OAuth callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard"); // Redirect to dashboard on successful login
  }
);

// Stripe Payment Route
router.post("/pay", createPaymentSession);

// Dashboard Route
router.get("/dashboard", (req, res) => res.sendFile(__dirname + "/../public/dashboard.html"));

module.exports = router;
