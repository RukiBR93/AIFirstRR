'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

type Mascota = {
  id: string;
  nome: string;
  tipo_animal: string;
  raca: string;
  sexo: string;
  idade: number;
  foto_url: string | null;
  status: string;
};

export default function HomePage() {
  const [session, setSession] = useState<Session | null>(null);
  const [carregandoSessao, setCarregandoSessao] = useState(true);
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [carregandoMascotas, setCarregandoMascotas] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setCarregandoSessao(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setMascotas([]);
      return;
    }

    setCarregandoMascotas(true);
    setErro(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/mascotas`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error ?? `Erro ${res.status}`);
        }
        return res.json();
      })
      .then(setMascotas)
      .catch((err: any) => setErro(err.message ?? 'Erro ao carregar mascotas'))
      .finally(() => setCarregandoMascotas(false));
  }, [session]);

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>EventPETS</h1>

      {carregandoSessao ? (
        <p>Carregando...</p>
      ) : session ? (
        <>
          <p>Logado como {session.user.email}.</p>
          <p>
            <a href="/mascotas/new">Cadastrar mascota</a>
          </p>
          <button onClick={() => supabase.auth.signOut()}>Sair</button>

          <h2>Minhas mascotas</h2>

          {carregandoMascotas && <p>Carregando mascotas...</p>}
          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          {!carregandoMascotas && !erro && mascotas.length === 0 && (
            <p>Nenhuma mascota cadastrada ainda.</p>
          )}

          {mascotas.length > 0 && (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {mascotas.map((m) => (
                <li
                  key={m.id}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 8,
                    maxWidth: 420,
                  }}
                >
                  <strong>{m.nome}</strong> — {m.tipo_animal}, {m.raca},{' '}
                  {m.sexo === 'macho' ? 'macho' : 'fêmea'}, {m.idade} ano(s)
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>
          Lista de mascotas — feature ainda não implementada nesta v1. Para
          cadastrar uma mascota, primeiro <a href="/login">entre</a>.
        </p>
      )}
    </main>
  );
}
