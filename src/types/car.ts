export interface Car {
  id: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  price: string;
  priceValue: number;
  photo: string;
  category: string;
}

export interface ScrapingResult {
  cars: Car[];
  lastUpdated: string;
}
