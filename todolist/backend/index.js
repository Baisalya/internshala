
const express = require('express');
const bodyParser = require('body-parser');
const NodePersist = require('node-persist');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors()); 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


const storage = NodePersist.create({ dir: './data', ttl: false });
storage.init().then(() => console.log('Node-persist has initialized successfully'))
  .catch(error => console.error(' initializing node-persist Error:', error));

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await storage.values();
    console.log('Tasks:', tasks); // Log tasks 
    res.json(tasks);
  } catch (error) {
    console.error(' fetching tasks Error:', error);
    res.status(500).send('Error fetching tasks');
  }
});

// Add a task
app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    await storage.setItem(Date.now().toString(), task);
    console.log('Task added:', task); // Log added task 
    res.sendStatus(200);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).send('Error adding task');
  }
});

// Clear all tasks
app.delete('/tasks', async (req, res) => {
  try {
    await storage.clear();
    console.log('All tasks cleared'); // Log 
    res.sendStatus(200);
  } catch (error) {
    console.error('Error clearing tasks:', error);
    res.status(500).send('Error clearing tasks');
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
