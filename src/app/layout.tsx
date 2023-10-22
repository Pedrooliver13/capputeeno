// Packages
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Seu E-commerce preferido!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
