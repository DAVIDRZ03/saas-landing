import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-slate-950 text-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Lanzamiento v2.0 ya disponible</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6">
          Escala tu flujo de trabajo con nuestra plataforma <span className="text-indigo-500">SaaS de nivel profesional</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          Optimiza la gestión de tus proyectos con herramientas avanzadas diseñadas para un rendimiento impecable y máxima productividad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
            Probar gratis por 14 días
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold px-6 py-3 rounded-lg transition-colors">
            Ver demostración
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Configuración en 2 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Soporte 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
