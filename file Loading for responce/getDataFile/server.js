const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4545;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/txtdata") {
      const filePath = path.join(__dirname, "../data1.txt");

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });

          res.end("Ineternal server Error");
        } else {
          // res.statusCode = 200;
          // res.setHeader("Content-Type", "text/plain");
          res.writeHead(200, { "Content-Type": "text/plain" }); // or

          res.end(data);
        }
      });
    } else if (req.url === "/jsondata") {
      const filePath = path.join(__dirname, "myjson.json");

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });

          res.end("Ineternal server Error");
        } else {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.end(data);
        }
      });
    } else if (req.url === "/myimg") {
      const filePath = path.join(__dirname, "image.jpg");

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });

          res.end("Internal server Error");
        } else {
          res.writeHead(200, { "Content-Type": "image/jpeg" });

          res.end(data);
        }
      });
    } else if (req.url === "/register") {
      const filePath = path.join(__dirname, "registration.html");

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route Not Found");
    }
  }

  // POST METHOD
  else if (req.method === "POST" && req.url === "/register") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = new URLSearchParams(body);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(`
        <h1>Registration Successful</h1>
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Password: ${password}</h3>
      `);
    });
  }
});

// const Domain="127.0.0.1";

//listen server
server.listen(PORT, "127.0.0.1", () => {
  console.log(`server is working on http://127.0.0.1:${PORT}`);
});
