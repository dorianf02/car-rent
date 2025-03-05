"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cooperation() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    telefon: "",
    email: "",
    marka: "",
    model: "",
    rocznik: "",
    nadwozie: "",
    paliwo: "",
    moc: "",
    zdjecia: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formularz został wysłany!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full flex justify-between items-center p-6 bg-gray-100 shadow-md">
        <Image src="/next.svg" alt="Logo" width={120} height={30} priority />
        <h1 className="text-xl font-semibold text-blue-700 flex-1 text-center">Wypożyczalnia samochodów TwojaBryka</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700">
            <li><Link href="/" className="hover:underline">Strona Główna</Link></li>
            <li><Link href="/offer" className="hover:underline">Oferta</Link></li>
            <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/logowanie" className="hover:underline font-semibold text-blue-600">Logowanie</Link></li>
          </ul>
        </nav>
      </header>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Współpraca z naszą wypożyczalnią</h1>
        <h3 className="text-2xl font-bold mb-4" > Posiadasz ciekawy samochód i chcesz, aby na siebie zarabiał? Trafiłeś idealnie!</h3>
        <p className="text-gray-700 mb-6">
          Nawiązujemy współpracę z osobami, które chcą udostępnić swój samochód naszej wypożyczalni.
          To ty decydujesz, czy chcesz, aby twoje auto było w naszej ofercie cały czas, w weekendy, czy może tylko od czasu do czasu.
          Kwestie finansowe omawiamy indywidualnie z każdym po poznaniu szczegółów dotyczących samochodu. 
          Wypełnij formularz i dołącz do naszej sieci! Do formularza koniecznie dodaj zdjęcia samochodu! 
          W razie zainteresowania z naszej strony skontaktujemy się z tobą.
        </p>
        <p className="text-gray-700 mb-4">
          Po więcej szczegółów zapraszamy do kontaktu pod podany numer lub adres mailowy:
        </p>

        <div className="flex items-center text-gray-700 mb-2">
          📞 <a href="tel:+48123456789" className="ml-2 text-blue-600 hover:underline">+48 123 456 789</a>
        </div>

        <div className="flex items-center text-gray-700">
          ✉️ <a href="mailto:twojabrykacooperation@wypozyczalnia.pl" className="ml-2 text-blue-600 hover:underline">twojabrykacooperation@wypozyczalnia.pl</a>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mt-4"
        >
          Nawiąż współpracę
        </button>
      </div>

      {showForm && (
        <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Formularz zgłoszeniowy</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="imie"
                placeholder="Imię"
                value={formData.imie}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="nazwisko"
                placeholder="Nazwisko"
                value={formData.nazwisko}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                name="telefon"
                placeholder="Numer telefonu"
                value={formData.telefon}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Adres e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="marka"
                placeholder="Marka pojazdu"
                value={formData.marka}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="model"
                placeholder="Model pojazdu"
                value={formData.model}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="number"
                name="rocznik"
                placeholder="Rocznik"
                value={formData.rocznik}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
               <select name="nadwozie" value={formData.nadwozie} onChange={handleChange} required className="w-full p-3 border rounded-lg">
                <option value="">Rodzaj nadwozia</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="kombi">Kombi</option>
                <option value="coupe">Coupe</option>
                <option value="kabriolet">Kabriolet</option>
                <option value="crossover">Crossover</option>
                <option value="bus">Bus</option>
              </select>

              <select name="paliwo" value={formData.paliwo} onChange={handleChange} required className="w-full p-3 border rounded-lg">
                <option value="">Rodzaj paliwa</option>
                <option value="benzyna">Benzyna</option>
                <option value="diesel">Diesel</option>
                <option value="benzyna+lpg">Benzyna + LPG</option>
                <option value="elektryk">Elektryk</option>
                <option value="hybryda">Hybryda</option>
              </select>

              <input
                type="number"
                name="moc"
                placeholder="Moc silnika (KM)"
                value={formData.moc}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Dodaj zdjęcia pojazdu:</label>
              <input type="file" name="zdjecia" multiple onChange={handleChange} className="mt-2 p-2 border rounded-lg" required />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Wyślij zgłoszenie
            </button>
          </form>
        </div>
      )}

    

      <footer className="w-full text-center p-4 bg-gray-100 mt-10">
        <p className="text-gray-500">&copy; 2025 Wypożyczalnia Samochodów Twoja Bryka. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
