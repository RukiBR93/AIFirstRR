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
    <main className="page" style={{ maxWidth: 560 }}>
      <div className="topbar">
        <h1 style={{ margin: 0 }}>EventPETS</h1>
        {session && (
          <button className="btn btn-secondary" onClick={() => supabase.auth.signOut()}>
            Sair
          </button>
        )}
      </div>

      {carregandoSessao ? (
        <p className="muted">Carregando...</p>
      ) : session ? (
        <>
          <p className="muted">Logado como {session.user.email}.</p>
          <p>
            <a href="/mascotas/new">Cadastrar mascota</a>
          </p>

          <h2>Minhas mascotas</h2>

          {carregandoMascotas && <p className="muted">Carregando mascotas...</p>}
          {erro && <p className="alert alert-error">{erro}</p>}

          {!carregandoMascotas && !erro && mascotas.length === 0 && (
            <p className="muted">Nenhuma mascota cadastrada ainda.</p>
          )}

          {mascotas.length > 0 && (
            <ul className="pet-list">
              {mascotas.map((m) => (
                <li key={m.id} className="pet-item">
                  <strong>{m.nome}</strong> — {m.tipo_animal}, {m.raca},{' '}
                  {m.sexo === 'macho' ? 'macho' : 'fêmea'}, {m.idade} ano(s)
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="muted">
          Lista de mascotas — feature ainda não implementada nesta v1. Para
          cadastrar uma mascota, primeiro <a href="/login">entre</a>.
        </p>
      )}
    </main>
  );
}
