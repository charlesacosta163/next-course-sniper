export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        {children}
      </div>
    );
  }
  