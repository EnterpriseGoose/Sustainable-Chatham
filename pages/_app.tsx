import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Sustainable Chatham</title>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/favicon/svg-icon.svg"
				/>
				<link
					rel="alternate icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="alternate icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#183047"
				/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#00a300" />
				<meta
					name="msapplication-config"
					content="/favicon/browserconfig.xml"
				/>
				<meta name="theme-color" content="#183047" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.waddlebot.tk/" />
				<meta
					property="og:title"
					content="Waddle | Discord Bots but Easy"
				/>
				<meta
					property="og:description"
					content="Waddle: the easiest and most customizeable discord bot creation tool."
				/>
				<meta
					property="og:image"
					content="https://www.motivationalpengu.in/logos/logo-big.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
				/>

				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
