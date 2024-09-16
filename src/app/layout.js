import './globals.css';

export const metadata = {
    title: 'Thiệp mời đám cưới',
    description: 'Chúc mừng trăm năm hạnh phúc.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={``}>{children}</body>
        </html>
    );
}
