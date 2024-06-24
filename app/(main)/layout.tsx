import Navbar from "@/components/ui-main/Navbar";
import Footer from "@/components/ui-main/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <main className="flex-1 min-h-screen max-w-[1000px] w-full p-4">
        <div className="min-h-[80svh]">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
