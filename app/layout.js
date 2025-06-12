import './globals.css';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'Adrin Paudel - Computer Engineer & Digital Creator',
  description: 'The personal portfolio of Adrin Paudel, a computer engineering student specializing in web/app development and UI/UX design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Moved suppressHydrationWarning to the body tag */}
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
