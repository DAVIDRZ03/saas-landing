import React from 'react';
import { Zap, ShieldCheck, BarChart3, Users, Cloud, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: 'Rendimiento Ultra Rápido',
    description: 'Arquitectura optimizada para responder en milisegundos y mantener tu flujo sin interrupciones.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    title: 'Seguridad Empresarial',
    description: 'Protección de datos de extremo a extremo con cumplimiento estricto de estándares globales.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    title: 'Métricas en Tiempo Real',
    description: 'Dashboards analíticos detallados para monitorear el crecimiento y rendimiento de tu equipo.'
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    title: 'Colaboración Fluida',
    description: 'Permite a tu equipo trabajar simultáneamente con roles y permisos personalizados.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-indigo-400" />,
    title: 'Sincronización Cloud',
    description: 'Tus proyectos disponibles 24/7 en la nube con respaldos automáticos cada hora.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: 'Automatización con IA',
    description: 'Reduce tareas repetitivas mediante flujos de trabajo inteligentes guiados por algoritmos.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Características Clave
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight">
            Todo lo que necesitas para escalar tu plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-950/60 border border-slate-800 p-8 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}