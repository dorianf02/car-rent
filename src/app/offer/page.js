"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Oferta() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    bodyType: "",
    fuelType: "",
    minHorsepower: "",
    maxHorsepower: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
      setFilteredCars(data);

      const uniqueBrands = [...new Set(data.map((car) => car.brand))];
      setBrands(uniqueBrands);
    }
    fetchCars();
  }, []);

  useEffect(() => {
    if (filters.brand) {
      const brandModels = [...new Set(cars.filter(car => car.brand === filters.brand).map(car => car.model))];
      setModels(brandModels);
    } else {
      setModels([]);
    }
  }, [filters.brand, cars]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    let filtered = cars.filter((car) => {
      return (
        (filters.brand === "" || car.brand === filters.brand) &&
        (filters.model === "" || car.model === filters.model) && 
        (filters.bodyType === "" || car.bodyType === filters.bodyType) &&
        (filters.fuelType === "" || car.fuelType === filters.fuelType) &&
        (filters.minHorsepower === "" || car.horsepower >= parseInt(filters.minHorsepower)) &&
        (filters.maxHorsepower === "" || car.horsepower <= parseInt(filters.maxHorsepower)) &&
        (filters.minPrice === "" || car.price >= parseInt(filters.minPrice)) &&
        (filters.maxPrice === "" || car.price <= parseInt(filters.maxPrice))
      );
    });

    setFilteredCars(filtered);
  };

  const handleReset = () => {
    setFilters({
      brand: "",
      model: "",
      bodyType: "",
      fuelType: "",
      minHorsepower: "",
      maxHorsepower: "",
      minPrice: "",
      maxPrice: "",
    });
    setFilteredCars(cars);
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
            <li><Link href="/cooperation" className="hover:underline">Współpraca</Link></li>
            <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/logowanie" className="hover:underline font-semibold text-blue-600">Logowanie</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex">
        <aside className="w-1/4 bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Filtruj</h2>

          <label className="block mb-2 font-medium">Marka:</label>
          <select
            name="brand"
            className="w-full p-2 border rounded-md mb-4"
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">Wszystkie</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          {filters.brand && (
            <>
              <label className="block mb-2 font-medium">Model:</label>
              <select
                name="model"
                className="w-full p-2 border rounded-md mb-4"
                value={filters.model}
                onChange={handleFilterChange}
              >
                <option value="">Wszystkie</option>
                {models.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </>
          )}

          <label className="block mb-2 font-medium">Typ auta:</label>
          <select
            name="bodyType"
            className="w-full p-2 border rounded-md mb-4"
            value={filters.bodyType}
            onChange={handleFilterChange}
          >
            <option value="">Wszystkie</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="bus">Bus</option>
            <option value="kombi">Kombi</option>
            <option value="coupe">Coupe</option>
            <option value="kabriolet">Kabriolet</option>
            <option value="crossover">Crossover</option>
          </select>

          <label className="block mb-2 font-medium">Rodzaj paliwa:</label>
          <select
            name="fuelType"
            className="w-full p-2 border rounded-md mb-4"
            value={filters.fuelType}
            onChange={handleFilterChange}
          >
            <option value="">Wszystkie</option>
            <option value="benzyna">Benzyna</option>
            <option value="diesel">Diesel</option>
            <option value="benzyna+lpg">Benzyna + LPG</option>
          </select>

          <label className="block mb-2 font-medium">Moc silnika (KM):</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minHorsepower"
              placeholder="Min"
              className="w-1/2 p-2 border rounded-md"
              value={filters.minHorsepower}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="maxHorsepower"
              placeholder="Max"
              className="w-1/2 p-2 border rounded-md"
              value={filters.maxHorsepower}
              onChange={handleFilterChange}
            />
          </div>

          <label className="block mb-2 font-medium mt-4">Cena (zł):</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              className="w-1/2 p-2 border rounded-md"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              className="w-1/2 p-2 border rounded-md"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Wyszukaj
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Wyczyść
            </button>
          </div>
        </aside>

        <main className="w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-6">Nasza oferta</h2>
          {filteredCars.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              Niestety nie posiadamy takiego pojazdu, zachęcamy do zapoznania się z naszą{" "}
              <Link href="/offer" className="text-blue-500 underline" onClick={() => window.location.reload()}>
                ofertą
              </Link>.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Image src={`/${car.images[0]}`} alt={`${car.brand} ${car.model}`} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{car.brand} {car.model}</h3>
                    <p>Rocznik: {car.year}</p>
                    <p>Typ: {car.bodyType}</p>
                    <p>Moc: {car.horsepower} KM</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <footer className="w-full text-center p-4 bg-gray-100 mt-10">
        <p className="text-gray-500">&copy; 2025 Wypożyczalnia Samochodów Twoja Bryka. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
