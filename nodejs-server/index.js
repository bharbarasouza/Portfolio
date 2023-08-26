const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/process-form', (req, res) => {
  const { name, email, message, subject } = req.body;

  // Your validation and email sending logic here
  // For now, just sending a response indicating success

  res.json({ success: true, message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
