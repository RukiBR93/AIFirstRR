'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const camposObrigatoriosOk = email && senha;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });

      if (error) throw error;

      router.push('/mascotas/new');
    } catch (err: any) {
      setErro(err.message ?? 'Erro ao entrar');
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="page">
      <div className="card">
        <h1>Entrar</h1>

        <form onSubmit={handleSubmit}>
          <label className="field">
            E-mail*
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="field">
            Senha*
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>

          <button className="btn" type="submit" disabled={!camposObrigatoriosOk || enviando}>
            {enviando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {erro && <p className="alert alert-error">{erro}</p>}
      </div>
    </main>
  );
}
