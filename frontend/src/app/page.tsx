import Plans from "./_components/Plans";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transforme seu Negócio Digital</h1>
          <p className="text-xl text-gray-400 mb-10">Soluções inteligentes para automatizar e escalar seu negócio</p>
          <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Comece Agora
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Preços Simples e Transparentes</h2>
          <p className="text-gray-400">Escolha o plano ideal para você e comece seu período de teste de 14 dias.</p>
        </div>

        <Plans />
      </section>
    </>
  );
}
