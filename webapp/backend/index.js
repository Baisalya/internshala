// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001
;

// Middleware
app.use(express.json());
app.use(cors()); // Use the cors middleware to enable CORS



// MongoDB connection
mongoose.connect('mongodb+srv://Baisalya:baisalya9937@cluster1.5eybi3j.mongodb.net/salesapp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


// User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Sales schema
const salesSchema = new mongoose.Schema({
  salesId: {
    type: String,
    unique: true
  },
  productName: String,
  quantity: Number,
  amount: Number,
  date: { type: Date, default: Date.now }
});
// Pre-save hook to generate salesId automatically
salesSchema.pre('save', async function(next) {
  try {
    if (!this.salesId) {
      const lastSale = await Sales.findOne({}, {}, { sort: { 'salesId': -1 } });
      let newId;
      if (!lastSale) {
        newId = 's1001';
      } else {
        const lastId = parseInt(lastSale.salesId.slice(1)); // Extract the number part of the last sales ID
        newId = 's' + (lastId + 1); // Increment the number part and concatenate with 's'
      }
      this.salesId = newId;
    }
    next();
  } catch (error) {
    next(error);
  }
});
const Sales = mongoose.model('Sales', salesSchema);

// Routes
// User Registration
app.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Adding new sales entry
app.post('/sales', async (req, res) => {
  try {
    const { productName, quantity, amount } = req.body;
    const sale = new Sales({ productName, quantity, amount });
    await sale.save();
    res.status(201).json({ message: 'New sales entry added successfully', salesId: sale.salesId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Top 5 sales
app.get('/top5sales', async (req, res) => {
  try {
    const top5Sales = await Sales.find().sort({ amount: -1 }).limit(5);
    res.status(200).json(top5Sales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Total revenue calculation
app.get('/totalRevenue', async (req, res) => {
  try {
    const allSales = await Sales.find();
    let totalRevenue = 0;
    allSales.forEach(sale => {
      totalRevenue += sale.amount;
    });
    res.status(200).json({ totalRevenue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
