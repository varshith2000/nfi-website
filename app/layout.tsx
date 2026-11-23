import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nurture Food Inc — Kitchen and Food as a Service',
  description: 'Kitchen as a service and food as a service for growing food brands.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
