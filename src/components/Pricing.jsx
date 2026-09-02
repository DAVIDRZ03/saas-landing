import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Inicial',
    price: 'Q150',
    description: 'Perfecto para creadores independientes y proyectos pequeños.',
    features: ['Hasta 5 proyectos', 'Analíticas básicas', 'Soporte por email', '1 GB de almacenamiento'],
    popular: false,
    buttonText: 'Empezar Plan Inicial'
  },
  {
    name: 'Pro',
    price: 'Q380',
    description: 'Ideal para equipos en crecimiento que necesitan más potencia.',
    features: ['Proyectos ilimitados', 'Analíticas avanzadas e IA', 'Soporte prioritario 24/7', '100 GB de almacenamiento', 'Integraciones personalizadas'],
    popular: true,
    buttonText: 'Probar Gratis 14 Días'
  },
  {
    name: 'Empresa',
    price: 'Q770',
    description: 'Para organizaciones que requieren máxima seguridad y control.',
    features: ['Todo lo del plan Pro', 'SLA garantizado 99.9%', 'Gerente de cuenta dedicado', 'Almacenamiento ilimitado', 'Seguridad SSO / SAML'],
    popular: false,
    buttonText: 'Contactar Ventas'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Planes y Precios
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight">
            Precios transparentes para cada etapa de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between border ${
                plan.popular 
                  ? 'bg-slate-900 border-indigo-500 relative shadow-2xl shadow-indigo-500/10' 
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-slate-400 text-sm">/mes</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors text-sm ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}