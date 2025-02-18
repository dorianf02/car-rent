import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex justify-between items-center p-6 bg-white shadow-md">
        <Image src="/next.svg" alt="Next.js logo" width={120} height={30} priority />
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><Link href="/oferta" className="hover:text-blue-600 transition">Oferta</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Kontakt</Link></li>
            <li><Link href="/wspolpraca" className="hover:text-blue-600 transition">Współpraca</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
            <li><Link href="/logowanie" className="font-semibold text-blue-600 hover:text-blue-800 transition">Logowanie</Link></li>
          </ul>
        </nav>
      </header>

      <div className="w-full text-center mt-8 mb-8">
        <h1 className="text-5xl font-bold text-gray-900">Wypożyczalnia Samochodów Twoja Bryka</h1>
      </div>

      <main className="flex flex-col items-center justify-center flex-grow px-8 py-12 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Witamy na naszej stronie!</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Oferujemy szeroki wybór pojazdów na każdą okazję. Sprawdź naszą ofertę i znajdź idealny samochód dla siebie.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <Image src="/images/lambo1.jpg" alt="Lamborghini" width={300} height={200} className="w-full h-48 object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <Image src="/images/porsche.jpg" alt="Porsche" width={300} height={200} className="w-full h-48 object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <Image src="/images/bmw.jpg" alt="BMW" width={300} height={200} className="w-full h-48 object-cover" />
          </div>
        </div>

        <Link href="/oferta" className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Zobacz ofertę
        </Link>
      </main>

      <div className="w-full bg-white py-12 px-6 text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Współpraca z nami</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Jesteś właścicielem luksusowych samochodów i chcesz na nich zarabiać?  
          Dołącz do naszej sieci wypożyczalni! Oferujemy bezpieczne warunki, atrakcyjne prowizje  
          i profesjonalne podejście. Wspólnie zbudujemy najlepszą ofertę na rynku.
          W celu poznania szczegółów zapraszamy
    do przejścia do zakładki współpraca. 
        </p>
        <Link 
          href="/wspolpraca" 
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Dowiedz się więcej
        </Link>
      </div>

      <footer className="w-full text-center p-6 bg-gray-100 mt-10 text-gray-500">
        <p>&copy; 2025 Wypożyczalnia Samochodów Twoja Bryka. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
