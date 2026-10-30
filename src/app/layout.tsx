import type { Metadata } from 'next';
import '@/styles/tokens.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'r4ppz',
	description: 'John Rey Rabosa Pesonal Website',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
