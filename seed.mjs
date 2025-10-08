import 'dotenv/config';
import mongoose from 'mongoose';
import Book from './models/book.mjs';

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB for seeding');

  // Sample data
  const sampleBooks = [
    { title: '1984', author: 'George Orwell', year: 1949, summary: 'Dystopian' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, summary: 'Classic novel' },
    { title: 'The Hobbit', author: 'J. R. R. Tolkien', year: 1937, summary: 'Fantasy adventure' }
  ];

  // Clear existing
  await Book.deleteMany({});
  console.log('🧹 Cleared existing books');

  // Insert sample
  const inserted = await Book.insertMany(sampleBooks);
  console.log(`✅ Seeded ${inserted.length} books`);
  
  mongoose.disconnect();
  console.log('🔌 Disconnected after seed');
}

seed().catch(err => {
  console.error('❌ Seed error:', err);
  process.exit(1);
});
