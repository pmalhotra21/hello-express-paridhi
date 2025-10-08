import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import emailRoutes from './routes/email.js'; // ✅ email route
import bookRoutes from './routes/books.mjs'; // ✅ NEW book route

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use('/email', emailRoutes); // ✅ existing route
app.use('/api/books', bookRoutes); // ✅ new books API


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});


// Serve paridhi.html
app.get('/paridhi', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'paridhi.html'));
});

// API endpoint
app.get('/api/paridhi', (req, res) => {
  res.json({ myVar: 'Hello from paridhi!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
