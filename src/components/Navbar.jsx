import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold text-white tracking-tight">SaaSify</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Características</a>
          <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonios</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            Empezar gratis
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}