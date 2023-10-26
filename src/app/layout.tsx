// Packages
import type { Metadata } from 'next';
import { Saira, Saira_Stencil_One } from 'next/font/google';

// Components
import { DefaultProvider } from 'components/layout';

const saira = Saira({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
});

const saira_stencil_one = Saira_Stencil_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-stencil-one',
  weight: '400',
});

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
    <html
      lang="pt-BR"
      className={`${saira_stencil_one.variable} ${saira.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
