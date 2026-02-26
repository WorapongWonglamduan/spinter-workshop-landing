import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import './globals.css';
import { IntlProvider } from './IntlProvider';
import { Providers } from './providers';

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SP INTER SERVICE & SUPPLY Co.,Ltd",
  description: "SP INTER SERVICE & SUPPLY Co.,Ltd",
  keywords: "SP INTER SERVICE & SUPPLY Co.,Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${kanit.variable} antialiased font-kanit`} suppressHydrationWarning>
        <IntlProvider>
          <Providers>
            {children}
          </Providers>
        </IntlProvider>
      </body>
    </html>
  );
}
