const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>DevOps CI/CD Pipeline</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
      }
      .card {
        background: rgba(255,255,255,0.1);
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        backdrop-filter: blur(10px);
      }
      h1 {
        font-size: 40px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        opacity: 0.9;
      }
      .badge {
        margin-top: 20px;
        padding: 10px 20px;
        background: #00ffcc;
        color: #000;
        border-radius: 25px;
        font-weight: bold;
        display: inline-block;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 DevOps CI/CD Pipeline</h1>
      <p>Successfully deployed on <b>AWS EKS</b> using Jenkins, Docker & Kubernetes.</p>
      <div class="badge">STATUS: RUNNING ✅</div>
    </div>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));

