"use client";

//* --- REACT ---
import { useState } from "react";

//* --- AXIOS ---
import axios from "axios";

export default function Home() {
    //* STATES
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    //* CONST
    const fuelConsumption = 8.5; // Consommation en litres/100 km pour un Mercedes GLE 350
    const fuelPrice = 1.8; // Prix du litre de carburant en euros

    //* GET DISTANCE
    const getDistance = async () => {
        try {
            const response = await axios.get(
                `/api/get-distance?origin=${encodeURIComponent(
                    origin
                )}&destination=${encodeURIComponent(destination)}`
            );

            const distanceInKm = response.data.distance;

            // Calcul du coût en carburant
            const cost = (distanceInKm / 100) * fuelConsumption * fuelPrice;

            // Ajouter le nouveau résultat au tableau des résultats
            const newResult = {
                origin,
                destination,
                distance: distanceInKm,
                fuelCost: cost.toFixed(2),
            };

            setResults([...results, newResult]); // Ajouter au début du tableau
        } catch (error) {
            console.error(
                "Erreur lors de la récupération de la distance:",
                error
            );
            setError("Erreur ou ville non trouvée");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        getDistance();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-evently p-4">
            <img
                src="/img/map.jpg"
                alt="Map"
                className="rounded-full mb-4 w-36 h-36 md:w-48 md:h-48 mt-16 md:mt-4 shadow-md border"
            />

            <h1 className="text-lg md:text-4xl font-bold text-center mt-4 mb-8">
                Calculateur de distance
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded-xl shadow-md shadow-gray-400 w-full max-w-md"
            >
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ville de départ :
                    <input
                        type="text"
                        value={origin}
                        onChange={(e) =>
                            setOrigin(e.target.value.toUpperCase())
                        }
                        required
                        className="mt-2 p-3 border border-gray-400 rounded-full w-full text-transform: uppercase;"
                    />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                    Ville d'arrivée :
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) =>
                            setDestination(e.target.value.toUpperCase())
                        }
                        required
                        className="mt-2 p-3 border border-gray-400 rounded-full w-full text-transform: uppercase;"
                    />
                </label>
                <button
                    type="submit"
                    className="text-white font-bold py-2 px-4 rounded-full shadow-sm shadow-black mt-4 w-full bg-cyan-600"
                >
                    Calculer
                </button>
            </form>

            {error && <p className="mt-8 text-lg text-red-500">{error}</p>}

            {/* Tableau des résultats */}
            {results.length > 0 && (
                <div className="max-w-md w-full mt-8 overflow-y-auto max-h-40 md:max-h-80">
                    <table className="w-full text-center border-collapse text-xs md:text-sm">
                        <thead>
                            <tr className="bg-white">
                                <th className="border-b-2 p-2">
                                    Ville de départ
                                </th>
                                <th className="border-b-2 p-2">
                                    Ville d'arrivée
                                </th>
                                <th className="border-b-2 p-2">
                                    Distance (km)
                                </th>
                                <th className="border-b-2 p-2">
                                    Coût en carburant (€)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td className="border-b p-2">
                                        {result.origin}
                                    </td>
                                    <td className="border-b p-2">
                                        {result.destination}
                                    </td>
                                    <td className="border-b p-2">
                                        {result.distance} km
                                    </td>
                                    <td className="border-b p-2">
                                        {result.fuelCost} €
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
