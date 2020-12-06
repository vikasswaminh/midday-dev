import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";

export default function About() {
	return (
		<>
			<Head>
				<title>About | Midday</title>
			</Head>
			<section className="bg-gray w-full py-16 sm:py-40">
				<Container>
					<div className="grid sm:grid-cols-2 col-gap-8 row-gap-8 pb-8">
						<div>
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl leading-snug font-extrabold text-gray-900 sm:text-5xl md:text-6xl max-w-sm">
									Build a Great Website for Your Startup
								</h1>
								<p className="mt-3 text-base text-grey sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
									Unicorn Platform is a powerful website builder for startups, solo-entrepreneurs
									and hackers. Try it for free.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md">
										<Link href="/contact-us">
											<a className="w-full mb-4 flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-primary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
												Get Started
											</a>
										</Link>
									</div>
									<div className="rounded-md md:ml-4">
										<Link href="/web-design-development">
											<a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-black border-2 border-black bg-white hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
												Learn More
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="h-64 sm:h-full w-full rounded bg-gray relative flex items-center justify-center bg-hero-about"></div>
						</div>
					</div>
				</Container>
			</section>

			<section className="bg-primary relative py-24 px-4">
				<Container>
					<div className="max-w-3xl bg-white mx-auto ">
						<div className="max-w-3xl h-auto bg-white shadow-lg mx-auto transform rotate-3 p-8">
							<img
								src="/assets/iocn-high-five.svg"
								alt="Hand Icon"
								className="w-12 h-12 -mt-16 mx-auto mb-8"
							/>
							<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-3xl sm:leading-none md:text-5xl mb-4 transform -rotate-3">
								Great Website can enhance your brand image
							</h2>
							<p className="mt-4 text-lg text-grey leading-7 text-black mb-12 transform -rotate-3">
								Gaining a unique online identity for your business in this ultra-modern digital era
								is not easy. Unless you have a website, you are as good as invisible in this
								media-driven world. As professional web developers and website designers , we
								provide the best web design services to suit our customers’ business requirements.
								We are a renowned web design company having dedicated and highly experienced website
								designers.
							</p>

							<div className="mt-5 sm:mt-8 sm:flex transform -rotate-3 pb-8 ml-4">
								<div className="rounded-md shadow">
									<Link href="/web-design-development">
										<a className="mx-auto w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-secondary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-sm md:px-10">
											Learn More
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
