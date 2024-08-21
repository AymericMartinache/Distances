"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [distance, setDistance] = useState(null);
    const [fuelCost, setFuelCost] = useState(null);
    const [error, setError] = useState(null);

    const fuelConsumption = 8.5; // Consommation en litres/100 km pour un Mercedes GLE 350
    const fuelPrice = 1.8; // Prix du litre de carburant en euros

    const getDistance = async () => {
        try {
            const response = await axios.get(
                `/api/get-distance?origin=${encodeURIComponent(
                    origin
                )}&destination=${encodeURIComponent(destination)}`
            );
            const distanceInKm = response.data.distance;

            setDistance(distanceInKm);

            // Calcul du coût en carburant
            const cost = (distanceInKm / 100) * fuelConsumption * fuelPrice;
            setFuelCost(cost.toFixed(2)); // Coût en euros, arrondi à deux décimales
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
        setDistance(null);
        setFuelCost(null);
        setError(null);
        getDistance();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <img
                src="/img/map.jpg"
                alt="Map"
                className="rounded-full mb-2 w-48"
            />

            <h1 className="text-3xl font-bold text-center mt-4 mb-8">
                Calculateur de distance
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md shadow-gray-400 w-full max-w-md"
            >
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ville de départ :
                    <input
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                        className="mt-2 p-3 border rounded-full w-full"
                    />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                    Ville d'arrivée :
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                        className="mt-2 p-3 border rounded-full w-full"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-sm shadow-black mt-4 w-full"
                >
                    Calculer
                </button>
            </form>
            {distance && (
                <div className="mt-8 text-xl text-center">
                    <p className="mb-4">
                        Distance de {origin} à {destination}: {distance} km
                    </p>
                    <p>Coût en carburant : {fuelCost} €</p>
                </div>
            )}
            {error && <p className="mt-8 text-lg text-red-500">{error}</p>}
        </div>
    );
}
