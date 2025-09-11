import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from public/
app.use(express.static(join(__dirname, 'public')));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send(`Hello Express 👋 <a href="/paridhi">Go to my page</a>`);
});

// Serve yourname.html
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
