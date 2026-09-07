export const metadata = {
  title: 'EventPETS',
  description: 'Carnê virtual para mascotas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
