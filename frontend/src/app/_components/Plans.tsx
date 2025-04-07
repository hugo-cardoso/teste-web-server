type Plan = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export default async function Plans() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscription-plans`);
  const plans: Plan[] = await data.json();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => <Plan key={plan.id} plan={plan} />)}
    </div>
  )
}

function Plan({ plan }: { plan: Plan }) {
  const { id, name, price, features, description } = plan;

  const colorMap = {
    1: 'bg-primary',
    2: 'bg-secondary',
    3: 'bg-tertiary'
  } as Record<number, string>;

  const iconMap = {
    1: 'M13 10V3L4 14h7v7l9-11h-7z',
    2: 'M13 10V3L4 14h7v7l9-11h-7z',
    3: 'M13 10V3L4 14h7v7l9-11h-7z'
  } as Record<number, string>;

  return (
    <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[id]}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconMap[id]}/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
        <span className="text-gray-400">/mês</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map(feature => (
          <li className="flex items-center gap-2" key={feature}>
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex-1" />
      <button className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
        Selecionar Plano
      </button>
    </div>
  )
}