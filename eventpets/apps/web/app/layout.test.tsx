import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import RootLayout, { metadata } from './layout';

describe('RootLayout', () => {
  it('define os metadados da aplicação', () => {
    expect(metadata).toEqual({
      title: 'EventPETS',
      description: 'Carnê virtual para mascotas',
    });
  });

  it('renderiza os filhos dentro de html/body', () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <p>conteúdo</p>
      </RootLayout>,
    );

    expect(html).toContain('conteúdo');
    expect(html).toMatch(/<html[^>]*lang="pt-BR"[^>]*>[\s\S]*<body>[\s\S]*<\/body>[\s\S]*<\/html>/);
  });
});
