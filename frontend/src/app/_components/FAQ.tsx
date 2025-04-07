'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`
      rounded-lg 
      bg-dark/50
      border border-gray-700 backdrop-blur-sm 
      mb-4 
      overflow-hidden
      transition-all duration-300
      ${isOpen ? 'shadow-lg' : ''}
    `}>
      <button
        className="flex justify-between items-center w-full text-left p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg text-white font-medium">{question}</h3>
        <span className={`
          text-gray-400 
          transform transition-transform
          ${isOpen ? 'rotate-180' : ''}
        `}>
          ▼
        </span>
      </button>
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 px-6 pb-6' : 'max-h-0 opacity-0'}
        `}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      question: "Você oferece descontos para assinaturas anuais?",
      answer: "Não, atualmente trabalhamos apenas com planos mensais."
    },
    {
      question: "Quais métodos de pagamento vocês aceitam?",
      answer: "Aceitamos cartões de crédito, boleto bancário e PIX. Para planos empresariais, também oferecemos outras formas de pagamento sob consulta."
    },
    {
      question: "Existe um período de teste gratuito?",
      answer: "Sim! Oferecemos 14 dias de teste gratuito em todos os nossos planos. Durante este período, você terá acesso a todas as funcionalidades do plano escolhido, sem compromisso."
    },
    {
      question: "Com quem posso falar sobre um plano personalizado?",
      answer: "Entre em contato com nossa equipe comercial através do formulário de contato ou pelo email comercial@empresa.com.br para discutir opções de planos personalizados."
    },
    {
      question: "O que acontece se eu enviar mais emails do que meu plano permite?",
      answer: "Quando você se aproximar do limite do seu plano, enviaremos uma notificação. Caso ultrapasse, os emails adicionais serão cobrados conforme nossa política de uso excedente ou você pode fazer upgrade para um plano maior."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div>
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
} 