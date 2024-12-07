const express = require("express")
const app = express()
app.use(express.static("public"));

const algorithms_names = [];
// hashing algorithms
algorithms_names.push("bcrypt");
//algorithms_names.push("sha1");
//algorithms_names.push("sha256");
//algorithms_names.push("sha512");
algorithms_names.push("md5");
algorithms_names.push("md4");

algorithms_names.push("aes-128");
algorithms_names.push("aes-192");
algorithms_names.push("aes-256");

app.use((req, res, next) => {
    console.log("Time:", Date.now());
    console.log("Request Type:", req.method);
    console.log("Request URL:", req.originalUrl);
    console.log("IP:", req.ip);
    next();
});

app.get("/algorithms", (req, res) => {
    res.json(algorithms_names);
});

app.get("/encrypt/:algo", (req, res) => {
    const input = req.query.input;
    const algo = req.params.algo;
    console.log(input, algo);
    if(algorithms_names.includes(algo)) {
        const {encrypt} = require(`./hash/${algo}`)
        const output = encrypt(input);
        const response = {
            input: input,
            hashed: output
        };
        res.json(response);
    }
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
