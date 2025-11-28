import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            OUT OF STOCK
          </div>
        )}
        {product.inStock && (
           <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
            IN STOCK
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-semibold text-solar-600 mb-1 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Specs Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.specs.slice(0, 3).map((spec, i) => (
            <span key={i} className="inline-block bg-slate-100 text-slate-500 text-[10px] px-2 py-1 rounded-sm border border-slate-200 font-mono">
              {spec}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            <span className="text-xs text-slate-400 font-medium">/ {product.unit}</span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Add to Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
