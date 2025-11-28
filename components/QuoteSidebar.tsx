import React, { useState } from 'react';
import { CartItem } from '../types';

interface QuoteSidebarProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onSubmit: () => void;
  isOpen: boolean;
}

const QuoteSidebar: React.FC<QuoteSidebarProps> = ({ items, onRemove, onUpdateQty, onSubmit, isOpen }) => {
  const [submitted, setSubmitted] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const estimatedTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onSubmit(); // Clear cart in parent
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
         <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
           </svg>
         </div>
         <h2 className="text-2xl font-bold text-slate-900">Quote Request Sent</h2>
         <p className="text-slate-600 mt-2">A sales representative will contact you within 4 hours with bulk pricing and shipping estimates.</p>
         <p className="text-xs text-slate-400 mt-8">Reference ID: #{Math.floor(Math.random() * 1000000)}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Request for Quote</h2>
        <p className="text-slate-500 mt-2">Review your BOS list before submitting for wholesale pricing.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* List */}
        <div className="flex-1">
          {items.length === 0 ? (
            <div className="bg-white rounded-lg border-2 border-dashed border-slate-200 p-12 text-center">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-slate-900">No items in quote</h3>
              <p className="mt-1 text-sm text-slate-500">Get started by adding products from the catalog.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <ul className="divide-y divide-slate-200">
                {items.map((item) => (
                  <li key={item.id} className="p-6 flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md border border-slate-200" />
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.specs[0]} | {item.specs[1]}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-slate-300 rounded-md">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 text-slate-600 hover:bg-slate-50 border-r border-slate-300">-</button>
                        <span className="px-3 py-1 text-sm font-medium text-slate-900 min-w-[3rem] text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 text-slate-600 hover:bg-slate-50 border-l border-slate-300">+</button>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Summary Form */}
        <div className="lg:w-96">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 sticky top-24">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Project Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Company Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-500 focus:ring-solar-500 sm:text-sm p-2 border" placeholder="Solar Installers Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-500 focus:ring-solar-500 sm:text-sm p-2 border" placeholder="purchasing@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Project Zip Code</label>
                <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-solar-500 focus:ring-solar-500 sm:text-sm p-2 border" />
              </div>
              
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="flex justify-between py-2">
                  <span className="text-sm text-slate-600">Total Items</span>
                  <span className="text-sm font-medium text-slate-900">{totalItems}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-slate-600">Est. List Price</span>
                  <span className="text-sm font-medium text-slate-900">${estimatedTotal.toFixed(2)}</span>
                </div>
                <div className="mt-2 text-xs text-slate-500 italic">
                  * Final wholesale pricing usually 15-30% lower based on volume.
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={items.length === 0}
                className="w-full mt-6 bg-solar-600 text-white py-3 px-4 rounded-lg hover:bg-solar-700 font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSidebar;
