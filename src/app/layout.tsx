import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed font to Inter
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use --font-inter CSS variable
});

export const metadata: Metadata = {
  title: 'MobileSecurity.site Hub', // Updated title
  description: 'Your central hub for mobile security information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply dark mode by default
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased', // Use font-sans which defaults to Inter via Tailwind config
          inter.variable // Make the CSS variable available
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
