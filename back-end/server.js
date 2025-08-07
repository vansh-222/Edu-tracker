const express = require('express');
const cors = require('cors');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/subjects', subjectRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});