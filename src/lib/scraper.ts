import fs from 'fs';
import path from 'path';
import { Car, ScrapingResult } from '@/types/car';

const DATA_FILE = path.join(process.cwd(), 'src/data/cars.json');

export async function scrapeEncar(): Promise<ScrapingResult> {
  console.log('Starting ENCAR scrape...');
  
  // Using the mobile API endpoint discovered during research
  const url = 'https://api.encar.com/search/car/list/mobile?count=true&q=(And.Hidden.N._.CarType.A.)&sr=%7CMobileModifiedDate%7C0%7C40&inav=%7CMetadata%7CSort&cursor=';
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
        'Referer': 'https://m.encar.com/',
        'Origin': 'https://m.encar.com',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ENCAR data: ${response.statusText}`);
    }

    const data = await response.json();
    const carList = data.SearchResults || [];

    const cars: Car[] = carList.map((item: any) => ({
      id: item.Id,
      brand: item.Manufacturer,
      model: `${item.Model} ${item.Badge || ''}`.trim(),
      year: item.Year,
      mileage: `${item.Mileage.toLocaleString()} km`,
      price: `${item.Price} 만원`,
      priceValue: item.Price,
      photo: item.Photo ? `https://ci.encar.com/carpicture${item.Photo}001.jpg` : '/placeholder-car.jpg',
      category: item.Category || 'Sedan',
    }));

    const result: ScrapingResult = {
      cars,
      lastUpdated: new Date().toISOString(),
    };

    // Ensure directory exists
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(result, null, 2));
    console.log(`Successfully scraped ${cars.length} cars and saved to ${DATA_FILE}`);
    
    return result;
  } catch (error) {
    console.error('Error scraping ENCAR:', error);
    throw error;
  }
}

export function getCachedCars(): ScrapingResult | null {
  if (!fs.existsSync(DATA_FILE)) {
    return null;
  }
  
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading cached cars:', error);
    return null;
  }
}
