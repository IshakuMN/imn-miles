import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter uppercase">Million Miles</h2>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
              The premier destination for luxury and performance vehicles in Dubai. 
              We provide a seamless experience for buying, selling, and consigning 
              the world's most exclusive cars.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs font-bold">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs font-bold">TW</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">CARS IN STOCK</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">SELL YOUR CAR</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">CONSIGNMENT</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">FINANCE</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-300">
              <li>Showroom 12, Al Aweer Auto Market</li>
              <li>Ras Al Khor, Dubai, UAE</li>
              <li>T: +971 4 333 3333</li>
              <li>E: info@millionmiles.ae</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <span>© 2024 MILLION MILES LUXURY CARS. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
