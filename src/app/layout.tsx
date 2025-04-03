import './globals.css';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen" suppressHydrationWarning={true}>
        {/* Header is now rendered inside individual pages */}
        
        <main className="relative">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
