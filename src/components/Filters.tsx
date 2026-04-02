'use client';

import React from 'react';
import { Filter, ChevronDown, RefreshCw } from 'lucide-react';

interface FiltersProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

const Filters: React.FC<FiltersProps> = ({ onRefresh, isRefreshing }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-black/10 transition-all hover:bg-black">
          <Filter size={16} />
          ALL CARS
        </button>
        
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-transparent hover:border-gray-200 transition-all">
            MANUFACTURER
            <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
          </button>
        </div>

        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-transparent hover:border-gray-200 transition-all">
            PRICE RANGE
            <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
          </button>
        </div>

        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-medium border border-transparent hover:border-gray-200 transition-all">
            YEAR
            <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sort by:</span>
        <select className="bg-transparent text-sm font-bold text-gray-900 focus:outline-none cursor-pointer">
          <option>NEWEST FIRST</option>
          <option>PRICE: LOW TO HIGH</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>MILEAGE: LOWEST</option>
        </select>
        
        <button 
          onClick={onRefresh}
          disabled={isRefreshing}
          className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors disabled:opacity-50"
          title="Refresh Data"
        >
          <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
