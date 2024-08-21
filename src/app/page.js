"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [destination, setDestination] = useState("");
    const [distance, setDistance] = useState(null);
    const [error, setError] = useState(null);

    const getDistance = async () => {
        try {
            const response = await axios.get(
                `/api/get-distance?destination=${encodeURIComponent(
                    destination
                )}`
            );
            setDistance(response.data.distance);
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
        setError(null);
        getDistance();
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-16">
                Calculateur de distance
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md border w-full max-w-md flex flex-col"
            >
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ville d&apos;arrivée :
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                        className="mt-2 p-3 border rounded-md w-full"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4"
                >
                    Calculer la distance
                </button>
            </form>
            {distance && (
                <p className="mt-8 text-xl">
                    La distance entre Nantes et {destination} est de {distance}{" "}
                    km
                </p>
            )}
            {error && <p className="mt-8 text-lg text-red-500">{error}</p>}
        </div>
    );
}
