import "./globals.css";
<<<<<<< HEAD:pharmaverse-new-1-main/src/app/layout.tsx
import { AuthProvider } from '../context/AuthContext';
=======
import Providers from "../src/components/Providers";
>>>>>>> 129ce26 (Initial pharmaverse push):app/layout.tsx

export const metadata = {
  title: 'Pharmaverse',
  description: 'Pharm.D Excellence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}