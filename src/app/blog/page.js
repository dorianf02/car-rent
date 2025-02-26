"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Jak dbać o samochód w zimie?",
    content:
      "Zima to trudny czas dla twojego auta. Sprawdź, jak zadbać o lakier, akumulator i opony, aby uniknąć problemów w chłodne dni.",
    link: "https://www.auto-swiat.pl/porady/10-porad-jak-zima-dbac-o-auto-by-nie-miec-z-nim-problemow/eqydrkv",
  },
  {
    title: "Najlepsze auta na długie trasy",
    content:
      "Planujesz długą podróż? Poznaj samochody, które zapewnią komfort, oszczędność paliwa i wygodę na trasie.",
    link: "https://blog.spotawheel.pl/samochody-na-dluga-trase-top-5/",
  },
  {
    title: "Elektryczne vs. spalinowe – które wybrać?",
    content:
      "Czy samochód elektryczny to dobry wybór? Porównujemy wady i zalety obu typów napędów.",
    link: "https://mubi.pl/poradniki/samochod-elektryczny-czy-spalinowy/",
  },
];

const curiosities = [
  "Pierwszy samochód na świecie został wynaleziony w 1886 roku przez Karla Benza.",
  "Najdroższy samochód świata – Rolls-Royce Boat Tail – kosztuje około 28 mln dolarów!",
  "Bugatti Chiron może rozpędzić się do 490 km/h, co czyni go jednym z najszybszych samochodów na świecie.",
  "Największa liczba kilometrów przejechanych jednym samochodem to ponad 5 milionów!",
];

export default function Blog() {
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
            <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
            <li><Link href="/logowanie" className="hover:underline font-semibold text-blue-600">Logowanie</Link></li>
          </ul>
        </nav>
      </header>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Najnowsze artykuły</h2>
        {articles.map((article, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-700 mt-2">{article.content}</p>
            <Link href={article.link} 
            target="_blank"
            className="text-blue-600 hover:underline mt-2 block">
              Czytaj więcej
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Ciekawostki motoryzacyjne</h2>
        <ul className="list-disc list-inside text-gray-700">
          {curiosities.map((fact, index) => (
            <li key={index} className="mb-2">{fact}</li>
          ))}
        </ul>
      </div>

      <footer className="w-full text-center p-4 bg-gray-100 mt-10">
        <p className="text-gray-500">&copy; 2025 Wypożyczalnia Samochodów Twoja Bryka. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
