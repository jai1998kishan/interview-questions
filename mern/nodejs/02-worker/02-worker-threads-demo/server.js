const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

const PORT = 3000;

// ---------------------------------------------
// 🟢 A fast endpoint — our canary
// ---------------------------------------------

app.get("/health", (req, res) => {
  res.json({ status: "ok", time: Date.now() });
});

// ---------------------------------------------
// 🔴 The BLOCKING version
// Hashing happens on the MAIN thread
// ---------------------------------------------
app.post("/hash-blocking", async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "password required" });
  }

  const start = Date.now();

  // bcrypt.hash is CPU-intensive (taskes ~250 with 10 rounds)
  const hash = await bcrypt.hash(password, 10);

  const duration = Date.now() - start;

  res.json({
    hash,
    durationMs: duration,
    mode: "blocking",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
