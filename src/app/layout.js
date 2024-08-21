import "./globals.css";

export const metadata = {
    title: "Calcul distance",
    description: "Calcul de distance en km",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="flex justify-center items-center">{children}</body>
        </html>
    );
}
