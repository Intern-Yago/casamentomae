import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 1,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('rsvps')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            attending: formData.attending === 'yes',
            guests: parseInt(formData.guests.toString()),
            message: formData.message,
          }
        ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting RSVP:', err);
      setError('Houve um erro ao enviar sua confirmação. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="section bg-off-white text-center">
        <div className="fade-in">
          <h2 className="section-title">Obrigado!</h2>
          <p className="text-2xl mb-8">Sua confirmação foi enviada com sucesso.</p>
          <p>Mal podemos esperar para celebrar com você!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section bg-off-white">
      <h2 className="section-title">Confirmar Presença</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg fade-in">
        <p className="text-center mb-8">
          Por favor, confirme sua presença até o dia 24 de Setembro de 2026.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nome Completo</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-olive-green"
              placeholder="Como está no convite"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-olive-green"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Você comparecerá?</label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-olive-green"
              >
                <option value="yes">Sim, com certeza!</option>
                <option value="no">Infelizmente não poderei.</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Quantidade de Pessoas</label>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-olive-green"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Mensagem para os Noivos (Opcional)</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-olive-green"
              placeholder="Deixe uma mensagem carinhosa..."
            ></textarea>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="btn w-full"
          >
            {loading ? 'Enviando...' : 'Confirmar Presença'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
