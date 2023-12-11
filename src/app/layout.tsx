import type { Metadata } from 'next'
import '@/app/ui/globals.css';


export const metadata: Metadata = {
  title: 'Noel Schneider',
  description: 'Noel Schneider\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
