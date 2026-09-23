// test.js
// Fires many requests and measures the health endpoint's response time.

const BASE = "http://localhost:3000";

async function timeRequest(url, options = {}) {
  const start = Date.now();
  await fetch(url, options);
  return Date.now() - start;
}

async function runTest(label, hashEndpoint) {
  console.log(`\n🧪 Test: ${label}`);
  console.log("─".repeat(50));

  // Fire 5 password hashes concurrently
  const hashPromises = [];
  for (let i = 0; i < 5; i++) {
    hashPromises.push(
      timeRequest(`${BASE}${hashEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: `password-${i}` }),
      }),
    );
  }

  // While hashing is happening, ping /health 5 times
  await new Promise((resolve) => setTimeout(resolve, 50)); // let hashing start

  const healthTimes = [];
  for (let i = 0; i < 5; i++) {
    const t = await timeRequest(`${BASE}/health`);
    healthTimes.push(t);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  await Promise.all(hashPromises);

  console.log("Health endpoint response times:");
  healthTimes.forEach((t, i) => {
    const emoji = t > 200 ? "❌" : "✅";
    console.log(`  Ping ${i + 1}: ${t}ms ${emoji}`);
  });

  const worst = Math.max(...healthTimes);
  console.log(`\n  Worst health response: ${worst}ms`);
  if (worst > 200) {
    console.log("  😱 BLOCKED — the main thread was frozen!");
  } else {
    console.log("  🎉 FAST — the main thread stayed responsive.");
  }
}

async function main() {
  await runTest("Blocking (main thread)", "/hash-blocking");
}

main();
