import React, { useState } from 'react';

type FormProps = {
  onClose?: () => void;
};

export default function Form({ onClose }: FormProps) {
  const [values, setValues] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setValues({ nombre: '', email: '', mensaje: '' });
      onClose && onClose();
    }, 1500);
  };

  return (
    <div
      style={{
        margin: '1.5rem auto',
        maxWidth: 400,
        background: '#fffdfa',
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(124,94,72,0.08)',
        padding: '1.5rem 1.2rem',
        position: 'relative',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>
            Nombre
            <input
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: 6,
                border: '1px solid #e0d7c6',
                marginTop: 2,
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: 6,
                border: '1px solid #e0d7c6',
                marginTop: 2,
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>
            Mensaje
            <textarea
              name="mensaje"
              value={values.mensaje}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: 6,
                border: '1px solid #e0d7c6',
                marginTop: 2,
                resize: 'vertical',
              }}
            />
          </label>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: '#eee',
              color: '#7c5e48',
              border: 'none',
              borderRadius: 20,
              padding: '0.5rem 1.2rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Cancelar
          </button>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg,#f10505ff 60%,#f4a261 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 20,
              padding: '0.5rem 1.2rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            disabled={enviado}
          >
            {enviado ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
        {enviado && (
          <div style={{ marginTop: 12, color: '#81b29a', fontWeight: 500, textAlign: 'center' }}>
            ¡Consulta enviada!
          </div>
        )}
      </form>
    </div>
  );
}
