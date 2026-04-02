import { NextResponse } from 'next/server';
import { scrapeEncar } from '@/lib/scraper';

export async function GET() {
  try {
    const result = await scrapeEncar();
    return NextResponse.json({ success: true, count: result.cars.length, lastUpdated: result.lastUpdated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
