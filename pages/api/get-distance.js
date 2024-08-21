import axios from "axios";

export default async function handler(req, res) {
    const { destination } = req.query;

    const origin = "Nantes, France"; // Point de départ fixe
    const apiKey = "AIzaSyAGeb-T40uH4OfN5M52M1vjI9hoEAgKTzs";

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
                origin
            )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`
        );
        const distanceInMeters =
            response.data.rows[0].elements[0].distance.value;
        const distanceInKm = (distanceInMeters / 1000).toFixed(2);

        res.status(200).json({ distance: distanceInKm });
    } catch (error) {
        console.error("Erreur lors de la récupération de la distance:", error);
        res.status(500).json({
            error: "Erreur lors de la récupération de la distance",
        });
    }
}
