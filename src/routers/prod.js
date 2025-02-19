import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "foi o get dos prod",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "foi o post dos prod",
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "foi o put dos prod",
  });
});

router.patch("/", (req, res) => {
  res.json({
    message: "foi o patch dos prod",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "foi o delete dos prod",
  });
});

export default router;
