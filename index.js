const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

require('./routes/dialogFlowRoutes')(app);







app.listen(PORT);