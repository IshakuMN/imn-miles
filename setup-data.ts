import { scrapeEncar } from './src/lib/scraper.js';

// Simple runner for the scraper
async function setup() {
  try {
    console.log('Running initial scrape...');
    process.env.NODE_ENV = 'development';
    await scrapeEncar();
    console.log('Initial setup complete.');
  } catch (e) {
    console.error('Setup failed:', e);
  }
}

setup();
