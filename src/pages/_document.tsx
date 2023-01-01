import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="">
			<Head>
				<link rel="icon" href="data:;base64,iVBORw0KGgo=" />

				<title>Ana Howard - Colourful Haired Human</title>
				<meta name="title" content="Ana Howard - Colourful Haired Human" />
				{/* facebook  / open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.anahoward.me"></meta>
				<meta property="og:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.anahoward.me" />
				<meta property="twitter:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://anahoward.me/images/preview.png"></meta>
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}