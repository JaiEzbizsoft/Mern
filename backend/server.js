const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_ENV)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));
const PORT  = process.env.PORT || 3000;




app.listen( PORT, () => {l
  console.log(`Server running on port ${PORT}`);
});
