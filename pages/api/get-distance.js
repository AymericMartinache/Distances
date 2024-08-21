//* --- AXIOS ---
import axios from "axios";

export default async function handler(req, res) {
    // on rércupèrre l'origine et la destination qui viennent de l'input
    const { origin, destination } = req.query;

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
                origin
            )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`
        );

        // on rrécupère la distance en metre
        const distanceInMeters =
            response.data.rows[0].elements[0].distance.value;

        // on la convertit en km
        const distanceInKm = (distanceInMeters / 1000).toFixed(2);

        // si pas d'erreur, on définit la distance
        res.status(200).json({ distance: distanceInKm });
    } catch (error) {
        console.error("Erreur lors de la récupération de la distance:", error);
        res.status(500).json({
            error: "Erreur lors de la récupération de la distance",
        });
    }
}
