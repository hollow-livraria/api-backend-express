import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "foi o get dos user",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "foi o post dos user",
  });
});

router.put("/", (req, res) => {
  res.json({
    message: "foi o put dos user",
  });
});

router.patch("/", (req, res) => {
  res.json({
    message: "foi o patch dos user",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "foi o delete dos user",
  });
});

export default router;
