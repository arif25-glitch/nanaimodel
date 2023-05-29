const express = require('express');
const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json({"limit": "1mb"}));
app.use(express.static("public"));

app.listen(port, () => console.log(`Listen to ${port}`));

app.get('/', (req, res) => {
    res.json({"text": "no api here"})
});