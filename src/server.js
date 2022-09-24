const express = require('express');
const ClientWebJs = require('./model/ClientWebJs');

const app = express();
const PORT = 3333;

app.use(express.json())
app.listen(PORT, () => console.log(`Listen port ${PORT}`));


/* 
  example :
  {
  "contacts": [
    ""
  ],
  "messages": [
    {"message": "oi, tudo tranquilo?", "timeout": 0},
    {"message": "teste de api", "timeout": 0},
    {"message": "funcional", "timeout": 0}
  ]
}
*/

app.post("/send-message", async (req, res) => {
  const { contacts, messages } = req.body;
  if (!contacts || contacts.length < 1) return res.status(400);
  if (!messages || messages.length < 1) return res.status(400);

  const webJs = new ClientWebJs();
  try {
    await webJs.connect(res, messages, contacts);
  } catch (err) {
    console.log("caiu no erro")
  }
})