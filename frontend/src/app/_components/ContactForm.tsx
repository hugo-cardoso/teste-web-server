'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Aqui você pode substituir com sua API real
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpa o formulário
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-500 mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Seu nome completo"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-500 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="seu@email.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-500 mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Como podemos ajudar?"
          required
        ></textarea>
      </div>

      {status.message && (
        <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {status.message}
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>
    </form>
  );
} 