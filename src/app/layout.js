import "./globals.css";

export const metadata = {
    title: "Calcul distance",
    description: "Calcul de distance en km",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="flex justify-center items-center">{children}</body>
        </html>
    );
}
