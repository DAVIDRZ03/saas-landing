import React from 'react';
import { Layers, Globe, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold text-white tracking-tight">DRZLABS</span>
        </div>

        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} DRZLABS Inc. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors" aria-label="Website"><Globe className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Contacto"><Mail className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Comunidad"><MessageSquare className="w-5 h-5" /></a>
        </div>

      </div>
    </footer>
  );
}