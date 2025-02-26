"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Wiadomość wysłana: ${message}`);
      setMessage("");
    };

    const handleClear = () => {
        setMessage("");
      };
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="w-full flex justify-between items-center p-6 bg-gray-100 shadow-md">
            <Image src="/next.svg" alt="Logo" width={120} height={30} priority />
            <h1 className="text-xl font-semibold text-blue-700 flex-1 text-center">Wypożyczalnia samochodów TwojaBryka</h1>
            <nav>
                <ul className="flex gap-6 text-gray-700">
                    <li><Link href="/" className="hover:underline">Strona Główna</Link></li>
                    <li><Link href="/oferta" className="hover:underline">Oferta</Link></li>
                    <li><Link href="/cooperation" className="hover:underline">Współpraca</Link></li>
                    <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                    <li><Link href="/logowanie" className="hover:underline font-semibold text-blue-600">Logowanie</Link></li>
                </ul>
            </nav>
        </header>
        <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
          <h1 className="text-3xl font-bold mb-6 text-center">Kontakt</h1>
    
          <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Dane kontaktowe</h2>
            <p className="text-gray-700"><strong>📍 Adres:</strong>ul. Pawia 5, 31-154 Kraków</p>
            <p className="text-gray-700"><strong>📞 Telefon:</strong> <a href="tel:+48123456789" className="text-blue-600 hover:underline">+48 123 456 789</a></p>
            <p className="text-gray-700"><strong>✉️ Email:</strong> <a href="mailto:twojabryka@wypozyczalnia.pl" className="text-blue-600 hover:underline">twojabryka@wypozyczalnia.pl</a></p>
    
        <div className="mt-6 relative">
  <h2 className="text-xl font-semibold mb-2">Lokalizacja</h2>
  <div className="relative w-full max-w-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.6995059634496!2d19.94597487687386!3d50.06869091792816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0b0a03a8d9%3A0x775e66489e30a0d8!2sGaleria%20Krakowska!5e0!3m2!1spl!2spl!4v1708469891234"
      width="600"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-64 rounded-lg shadow-md"
    ></iframe>
    <a 
      href="https://www.google.com/maps?q=Galeria+Krakowska,+Pawia+5,+31-154+Kraków" 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute inset-0"
    >
      <span className="sr-only">Otwórz mapę w Google Maps</span>
    </a>
  </div>
</div>

        <form onSubmit={handleSubmit} className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Wyślij nam wiadomość</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Wpisz swoją wiadomość..."
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Wyślij wiadomość
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Wyczyść
          </button>
        </form>
      </div>
    </div>
    <footer className="w-full text-center p-4 bg-gray-100 mt-10">
                <p className="text-gray-500">&copy; 2025 Wypożyczalnia Samochodów Twoja Bryka. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
  );
}