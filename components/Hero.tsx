import React from 'react';

interface HeroProps {
  onShopNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/id/435/1920/1080" 
          alt="Solar Array"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:w-2/3">
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold text-safety-500 bg-safety-500/10 rounded-full border border-safety-500/20">
              WHOLESALE ONLY
            </span>
            <span className="px-3 py-1 text-xs font-semibold text-solar-400 bg-solar-500/10 rounded-full border border-solar-500/20">
              UL LISTED
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Balance of System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-emerald-400">
              Done Right.
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl">
            Streamline your procurement with premium wire management, protection, and mounting components. 
            Engineered for utility-scale and commercial solar installers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onShopNow}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-solar-600 hover:bg-solar-700 md:text-lg transition-all shadow-lg shadow-solar-900/50"
            >
              Browse Catalog
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:bg-slate-800 md:text-lg transition-all">
              Request Line Card
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Ticker */}
      <div className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-white">10M+</p>
              <p className="text-sm text-slate-400">Feet of Wire Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="text-sm text-slate-400">In-Stock Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24h</p>
              <p className="text-sm text-slate-400">Shipping Turnaround</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-white">NEC</p>
              <p className="text-sm text-slate-400">Code Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
