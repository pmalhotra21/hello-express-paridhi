import 'dotenv/config';
import mongoose from 'mongoose';
import Book from './models/book.mjs';

async function cleanup() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB for cleanup');

  const result = await Book.deleteMany({});
  console.log(`🧹 Deleted ${result.deletedCount} books`);

  mongoose.disconnect();
  console.log('🔌 Disconnected after cleanup');
}

cleanup().catch(err => {
  console.error('❌ Cleanup error:', err);
  process.exit(1);
});
