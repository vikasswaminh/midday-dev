import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-2QQZETSFRE"></script>

					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2QQZETSFRE');
             `,
						}}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
						rel="stylesheet"
					></link>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
						crossOrigin="anonymous"
					></link>
					<meta charSet="utf-8"></meta>
					<meta
						name="description"
						content="Best in class Web Design & Development with Digital Marketing. Get your website up and running today!"
					></meta>
					<meta
						property="og:description"
						content="Best in class Web Design & Development with Digital Marketing. Get your website up and running today!"
					></meta>
					<meta property="og:image" content="/assets/og-image.jpg"></meta>
					<meta property="og:url" content="https://middaydev.com" key="ogurl" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
