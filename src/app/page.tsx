'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Filters from '@/components/Filters';
import CarCard from '@/components/CarCard';
import { Car } from '@/types/car';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Clock, ArrowRight, RefreshCw } from 'lucide-react';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCars = async (forceUpdate = false) => {
    setLoading(true);
    try {
      // First try to check if we have cached data
      const response = await fetch('/api/update-cars', {
        method: forceUpdate ? 'GET' : 'GET', // In a real app, logic would check timestamp
      });
      const data = await response.json();
      if (data.success) {
        // Since we are using a local file, we fetch it from a public route or just re-fetch the API
        // For this demo, the API returns the data directly if we modify it slightly, 
        // but let's assume we fetch again for simplicity.
        const res = await fetch('/api/get-cars'); // I'll create this helper route
        const carData = await res.json();
        setCars(carData.cars || []);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    const getInitialCars = async () => {
      try {
        const res = await fetch('/api/get-cars');
        const data = await res.json();
        if (data && data.cars && data.cars.length > 0) {
          setCars(data.cars);
          setLoading(false);
        } else {
          // If no data, trigger scrape
          fetchCars();
        }
      } catch (e) {
        fetchCars();
      }
    };
    getInitialCars();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchCars(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-16">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105"
            >
              <source src="https://millionmiles.ae/vid/banner-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative -mt-44 md:-mt-20 z-20 max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-12 bg-red-600" />
                <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
                  Luxury & Performance
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                DRIVE YOUR <br />
                <span className="text-red-600">DREAM</span> TODAY
              </h1>
              <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                Explore our exclusive collection of luxury vehicles from ENCAR. 
                Premium quality, verified history, and unparalleled service.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-xl shadow-red-600/20 group">
                  EXPLORE INVENTORY
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
                  SELL YOUR CAR
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-red-600 rounded-xl">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-xl font-black">100%</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">Verified</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-red-600 rounded-xl">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xl font-black">PREMIUM</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">Selection</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-red-600 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xl font-black">24H</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">Updates</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-red-600 rounded-xl">
                  <RefreshCw size={24} />
                </div>
                <div>
                  <div className="text-xl font-black">{cars.length}</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">Cars listed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4 block underline underline-offset-8 decoration-2">
                  Inventory
                </span>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                  NEW ARRIVALS
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-400 max-w-xs">
                  Updated daily with the latest listings from ENCAR premium network.
                </p>
              </div>
            </div>
            
            <Filters onRefresh={handleRefresh} isRefreshing={refreshing} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 rounded-2xl aspect-4/5" />
                ))
              ) : (
                cars.map((car, index) => (
                  <motion.div
                    key={car.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {!loading && cars.length === 0 && (
            <div className="py-20 text-center">
              <div className="inline-block p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
                <p className="text-gray-500 font-medium">No cars found. Try refreshing the data.</p>
                <button 
                  onClick={handleRefresh}
                  className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-bold"
                >
                  REFRESH NOW
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
