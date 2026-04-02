import { NextResponse } from 'next/server';
import { getCachedCars, scrapeEncar } from '@/lib/scraper';

export async function GET() {
  try {
    let result = getCachedCars();
    
    // If no cache, try to scrape once
    if (!result || !result.cars || result.cars.length === 0) {
      result = await scrapeEncar();
    }
    
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
