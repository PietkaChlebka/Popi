export const metadata = {
  title: "Popi",
  description: "Best app for movie selection!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
