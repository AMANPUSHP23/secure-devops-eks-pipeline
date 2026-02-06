const express = require("express");
const os = require("os");

const app = express();
let counter = 0;
const VERSION = "v2.0";

app.get("/", (req, res) => {
  counter++;

  res.send(`
    <html>
      <head>
        <title>DevOps CI/CD App</title>
        <style>
          body {
            font-family: Arial;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          .card {
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            display: inline-block;
          }
          h1 { font-size: 40px; }
          p { font-size: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 DevOps CI/CD Live App</h1>
          <p><b>Version:</b> ${VERSION}</p>
          <p><b>Hostname:</b> ${os.hostname()}</p>
          <p><b>Visitors:</b> ${counter}</p>
          <p><b>Time:</b> ${new Date().toLocaleString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

