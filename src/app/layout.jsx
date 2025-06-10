"use client";
import Navbar from "@/components/shared/Navbar";
import "@/app/globals.css"; // Ensure Tailwind/global styles are imported

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 font-sans text-gray-800">
        <Navbar />
        <main className="container mx-auto py-16 px-6">
          {children}
        </main>
        {/* Optionally add a footer here */}
      </body>
    </html>
  );
}