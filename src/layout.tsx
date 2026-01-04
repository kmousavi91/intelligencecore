import "./globals.css";

export const metadata = {
  title: "intelligencecore | AI & Data Systems",
  description: "Production-grade AI and data systems for complex environments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}

