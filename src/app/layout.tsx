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
      <body className="relative">
        {/* <div className="fixed inset-0 -z-20">
          <img 
            src="/images/A2.jpg" 
            alt="Background Image" 
            className="object-cover w-full h-full"
            style={{ zIndex: -1 }}
          />
        </div> */}
        
        
        
        <main className="pt-16 pb-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
