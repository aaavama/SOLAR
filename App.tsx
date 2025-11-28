import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ChatBot from './components/ChatBot';
import QuoteSidebar from './components/QuoteSidebar';
import { MOCK_PRODUCTS } from './constants';
import { Product, CartItem, ProductCategory } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const filteredProducts = selectedCategory === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === selectedCategory);

  const categories = ['All', ...Object.values(ProductCategory)];

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onShopNow={() => setCurrentPage('catalog')} />
            
            {/* Featured Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900">Featured Components</h2>
                <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                  High-demand items for your next residential or commercial install.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {MOCK_PRODUCTS.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </div>

            {/* Why Us */}
            <div className="bg-slate-100 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-solar-100 text-solar-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">Technical Expertise</h3>
                    <p className="mt-2 text-slate-500">Our engineers verify every product for NEC compliance and interoperability.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-solar-100 text-solar-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">Fast Shipping</h3>
                    <p className="mt-2 text-slate-500">Same-day shipping on orders placed before 2 PM EST from our 4 distribution centers.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-solar-100 text-solar-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">Volume Pricing</h3>
                    <p className="mt-2 text-slate-500">Tiered pricing for contractors. Create an account for net-30 terms.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'catalog':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Wholesale Catalog</h1>
              
              <div className="mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <div className="flex space-x-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-solar-600 text-white shadow-md' 
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
               <div className="text-center py-20">
                 <p className="text-slate-500 text-lg">No products found in this category.</p>
               </div>
            )}
          </div>
        );
      case 'quote':
        return (
          <QuoteSidebar 
            items={cart}
            onRemove={removeFromCart}
            onUpdateQty={updateQuantity}
            onSubmit={clearCart}
            isOpen={true}
          />
        );
      case 'tech-specs':
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 prose prose-slate max-w-none">
              <p className="lead">All SolarBOS Pro components are rigorously tested to meet or exceed industry standards.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Wire Standards</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>UL 4703:</strong> Standard for Photovoltaic Wire.</li>
                <li><strong>UL 854:</strong> Standard for Service-Entrance Cables.</li>
                <li><strong>Sunlight Resistance:</strong> All jacket insulation rated for 720 hours weatherometer testing.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2">Enclosure Ratings</h3>
              <table className="min-w-full mt-4 border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-2 text-sm">NEMA 3R</td>
                    <td className="px-4 py-2 text-sm">Outdoor protection against rain, sleet, and snow.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">NEMA 4X</td>
                    <td className="px-4 py-2 text-sm">Watertight and corrosion-resistant (ideal for coastal).</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-8 bg-blue-50 border-l-4 border-solar-500 p-4">
                <p className="text-sm text-blue-800">
                  <strong>Need specific datasheets?</strong> Use our AI Assistant in the bottom right to request PDF links or specific voltage curves.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      
      <main className="flex-grow bg-slate-50">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white tracking-tight">SolarBOS <span className="text-solar-500">Pro</span></span>
              <p className="mt-4 text-sm max-w-xs">
                The trusted partner for solar installers across North America. Providing the backbone for renewable energy since 2015.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => { setCurrentPage('catalog'); setSelectedCategory('Cables & Connectors'); }} className="hover:text-white">Cabling</button></li>
                <li><button onClick={() => { setCurrentPage('catalog'); setSelectedCategory('Combiner Boxes'); }} className="hover:text-white">Combiners</button></li>
                <li><button onClick={() => { setCurrentPage('catalog'); setSelectedCategory('Mounting & Racking'); }} className="hover:text-white">Racking</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('tech-specs')} className="hover:text-white">Tech Specs</button></li>
                <li><a href="#" className="hover:text-white">Warranty</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} SolarBOS Pro Wholesale. All rights reserved.
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;
