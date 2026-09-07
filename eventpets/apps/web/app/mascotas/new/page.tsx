'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

const TIPOS_ANIMAL = ['perro', 'gato', 'ave'] as const;

export default function NovaMascotaPage() {
  const router = useRouter();
  const [verificandoSessao, setVerificandoSessao] = useState(true);
  const [nome, setNome] = useState('');
  const [tipoAnimal, setTipoAnimal] = useState<(typeof TIPOS_ANIMAL)[number]>('perro');
  const [raca, setRaca] = useState('');
  const [sexo, setSexo] = useState<'macho' | 'femea'>('macho');
  const [idade, setIdade] = useState<number | ''>('');
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const camposObrigatoriosOk = nome && tipoAnimal && raca && sexo && idade !== '';

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
        return;
      }
      setVerificandoSessao(false);
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mascotas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          nome,
          tipo_animal: tipoAnimal,
          raca,
          sexo,
          idade: Number(idade),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Erro ${res.status}`);
      }

      setSucesso(true);
      setNome('');
      setRaca('');
      setIdade('');
    } catch (err: any) {
      setErro(err.message ?? 'Erro ao cadastrar mascota');
    } finally {
      setEnviando(false);
    }
  }

  if (verificandoSessao) {
    return (
      <main style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 420 }}>
        <p>Carregando...</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 420 }}>
      <h1>Nova mascota</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome*
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>

        <label>
          Tipo de animal*
          <select value={tipoAnimal} onChange={(e) => setTipoAnimal(e.target.value as any)}>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="ave">Ave</option>
          </select>
        </label>

        <label>
          Raça*
          <input value={raca} onChange={(e) => setRaca(e.target.value)} required />
        </label>

        <label>
          Sexo*
          <select value={sexo} onChange={(e) => setSexo(e.target.value as any)}>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
        </label>

        <label>
          Idade*
          <input
            type="number"
            min={0}
            value={idade}
            onChange={(e) => setIdade(e.target.value === '' ? '' : Number(e.target.value))}
            required
          />
        </label>

        {/* Foto: v1 assume upload direto ao Supabase Storage no frontend
            e envio apenas da foto_url resultante — não implementado
            ainda neste esqueleto. */}

        <button type="submit" disabled={!camposObrigatoriosOk || enviando}>
          {enviando ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {sucesso && <p style={{ color: 'green' }}>Mascota cadastrada com sucesso!</p>}
    </main>
  );
}
