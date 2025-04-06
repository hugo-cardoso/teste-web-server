export default function Sobre() {
  return (
    <>
      {/* About Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl text-gray-400 mb-10">Transformando negócios através da inovação digital desde 2020</p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Quem Somos</h2>
            <p className="text-gray-400">
              A SaaS Digital nasceu da paixão por criar soluções tecnológicas que realmente fazem a diferença. 
              Nossa missão é simplificar a transformação digital para empresas de todos os tamanhos, 
              fornecendo ferramentas poderosas e intuitivas que impulsionam o crescimento e a eficiência.
            </p>
            <p className="text-gray-400">
              Com uma equipe dedicada de especialistas em tecnologia e negócios, 
              trabalhamos incansavelmente para desenvolver soluções que atendam às necessidades 
              em constante evolução do mercado digital.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-400">Clientes Ativos</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-gray-400">Países Atendidos</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-tertiary mb-2">98%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-400">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Inovação</h3>
            <p className="text-gray-400">
              Buscamos constantemente novas maneiras de resolver problemas e melhorar 
              nossas soluções para atender às necessidades em evolução dos nossos clientes.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Colaboração</h3>
            <p className="text-gray-400">
              Acreditamos no poder do trabalho em equipe e na construção de 
              relacionamentos duradouros com nossos clientes e parceiros.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Confiança</h3>
            <p className="text-gray-400">
              Construímos todas as nossas soluções com foco em segurança, 
              confiabilidade e transparência para garantir a tranquilidade dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Nossa Equipe de Liderança</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full mb-6"></div>
            <h3 className="text-xl font-bold mb-2">Maria Silva</h3>
            <p className="text-primary mb-4">CEO & Fundadora</p>
            <p className="text-gray-400">
              Com mais de 15 anos de experiência em tecnologia e inovação.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-32 h-32 mx-auto bg-secondary/20 rounded-full mb-6"></div>
            <h3 className="text-xl font-bold mb-2">João Santos</h3>
            <p className="text-secondary mb-4">CTO</p>
            <p className="text-gray-400">
              Especialista em arquitetura de software e soluções escaláveis.
            </p>
          </div>
          <div className="bg-dark/50 p-8 rounded-xl border border-gray-700 backdrop-blur-sm text-center">
            <div className="w-32 h-32 mx-auto bg-tertiary/20 rounded-full mb-6"></div>
            <h3 className="text-xl font-bold mb-2">Ana Costa</h3>
            <p className="text-tertiary mb-4">COO</p>
            <p className="text-gray-400">
              Responsável por garantir a excelência operacional em todos os processos.
            </p>
          </div>
        </div>
      </section>
    </>
  )
} 