'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Gauge, ExternalLink } from 'lucide-react';
import { Car } from '@/types/car';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
        <Image
          src={car.photo}
          alt={car.brand + ' ' + car.model}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {car.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <div className="mb-4">
          <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">{car.brand}</h3>
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors">
            {car.model}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-500">
            <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
              <Calendar size={14} className="group-hover:text-red-500" />
            </div>
            <span className="text-xs font-medium">{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
              <Gauge size={14} className="group-hover:text-red-500" />
            </div>
            <span className="text-xs font-medium truncate">{car.mileage}</span>
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Starting at</span>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              {car.price}
            </span>
          </div>
          <button className="p-3 bg-gray-900 text-white rounded-xl hover:bg-red-600 transition-colors transform active:scale-95 duration-200">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
