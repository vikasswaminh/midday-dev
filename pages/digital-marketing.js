import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function DigitalMarketing() {
	return (
		<>
			<Head>
				<title>Digital Marketing | Midday</title>
			</Head>
			<section className="bg-gray w-full py-16 sm:py-40">
				<Container>
					<div className="grid sm:grid-cols-2 col-gap-8 row-gap-8 pb-8">
						<div>
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl leading-snug font-extrabold text-gray-900 sm:text-5xl md:text-6xl max-w-sm">
									Digital Marketing: Magic of increasing digital revenue
								</h1>
								<p className="mt-3 text-base text-grey sm:mt-5 sm:text-md sm:mx-auto md:mt-5 md:text-md lg:mx-0 max-w-md">
									How do you turn these online consumers into paying customers? With top-rated
									internet marketing services from an award-winning online marketing company. Your
									website is arguably your most important marketing asset and should serve as your
									24/7 online sales representative. But how easily can it be found?
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="h-64 sm:h-full w-full rounded bg-gray relative flex items-center justify-center bg-hero-marketing"></div>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-16 bg-white">
				<div className="container px-4 mx-auto px-4 max-w-lg">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
						Course Information
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-grey mb-12 mx-auto max-w-md">
						lorem ipsum text
					</p>
					<div className="mb-8">
						<h4 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
							Free Updates
							<img
								src="/assets/icon-tree.svg"
								alt="Tree Icon"
								className="w-8 h-8 -mt-2 ml-2 inline"
							/>
						</h4>
						<p className="text-base text-grey text-left sm:text-md max-w-lg">
							Gloss trabem! Hippotoxotas velum in nobilis avenio! Sunt amores contactus fidelis,
							barbatus rationees. Salvus ignigena inciviliter transferres scutum est.
						</p>
					</div>
					<div className="mb-8">
						<h4 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
							Make Strong Connections
							<img
								src="/assets/icon-crown.svg"
								alt="Crown Icon"
								className="w-8 h-8 -mt-2 ml-2 inline"
							/>
						</h4>
						<p className="text-base text-grey text-left sm:text-md max-w-lg">
							Gratis, salvus hibridas grauiter reperire de brevis, bassus homo. Cum habena crescere,
							omnes terrores captis grandis, varius imberes.
						</p>
					</div>
					<div className="mb-8">
						<h4 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
							Enjoy the Process
							<img
								src="/assets/icon-unicorn.svg"
								alt="Unicorn Icon"
								className="w-8 h-8 -mt-2 ml-2 inline"
							/>
						</h4>
						<p className="text-base text-grey text-left sm:text-md max-w-lg">
							Vox fidelis devatio est. Cum fides crescere, omnes gemnaes convertam brevis, barbatus
							orexises. A falsis, domina fatalis fluctui. Devirginatos unda!
						</p>
					</div>
				</div>
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
									<Link href="/contact-us">
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

			<section className="py-12 bg-white">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
						You Ask -- We Tell
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-grey mb-12 mx-auto max-w-md">
						Musas sunt boreass de varius elevatus. Ferox, camerarius homos inciviliter resuscitabo
						de talis, bassus mens.
					</p>
					<ul className="grid sm:grid-cols-2 col-gap-8 row-gap-10 mt-8 max-w-3xl mx-auto">
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold text-secondary">
										What is Unicorn Platform?
									</h3>
									<p className="mt-4 text-sm text-left leading-7 text-grey max-w-4xl">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis
										temporibus ex, explicabo commodi. Ipsum ducimus deserunt repellat corporis.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold text-secondary">
										What is Unicorn Platform?
									</h3>
									<p className="mt-4 text-sm text-left leading-7 text-grey max-w-4xl">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis
										temporibus ex, explicabo commodi. Ipsum ducimus deserunt repellat corporis.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold text-secondary">
										What is Unicorn Platform?
									</h3>
									<p className="mt-4 text-sm text-left leading-7 text-grey max-w-4xl">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis
										temporibus ex, explicabo commodi. Ipsum ducimus deserunt repellat corporis.
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold text-secondary">
										What is Unicorn Platform?
									</h3>
									<p className="mt-4 text-sm text-left leading-7 text-grey max-w-4xl">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis
										temporibus ex, explicabo commodi. Ipsum ducimus deserunt repellat corporis.
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

      <section className="py-12">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
						Into the wild
					</h2>
					<ul className="grid md:grid-cols-3 col-gap-8 row-gap-10">
						<Link href="/blog-detail-1">
							<li>
								<div className="card rounded-lg shadow-lg flex flex-col cursor-pointer">
									<LazyLoad>
										<img
											src="/assets/blog-1.jpg"
											alt="Blog"
											className="w-full rounded-md rounded-br-none rounded-bl-none h-64 w-full object-cover"
										/>
									</LazyLoad>
									<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black pt-4 text-left px-4 sm:text-5xl sm:leading-none md:text-3xl">
										How to Be More Creative: 10 Actionable Tips
									</h2>
									<p className="p-4 text-base text-grey text-left sm:text-lg sm:max-w-xl lg:text-xl">
										Read the story in our company blog.
									</p>
								</div>
							</li>
						</Link>
						<Link href="/blog-detail-1">
							<li>
								<div className="card rounded-lg shadow-lg flex flex-col cursor-pointer">
									<LazyLoad>
										<img
											src="/assets/blog-2.jpg"
											alt="Blog"
											className="w-full rounded-md rounded-br-none rounded-bl-none h-64 w-full object-cover"
										/>
									</LazyLoad>
									<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black pt-4 text-left px-4 sm:text-5xl sm:leading-none md:text-3xl">
										How to Be More Creative: 10 Actionable Tips
									</h2>
									<p className="p-4 text-base text-grey text-left sm:text-lg sm:max-w-xl lg:text-xl">
										Read the story in our company blog.
									</p>
								</div>
							</li>
						</Link>
						<Link href="/blog-detail-1">
							<li>
								<div className="card rounded-lg shadow-lg flex flex-col cursor-pointer">
									<LazyLoad>
										<img
											src="/assets/blog-3.jpg"
											alt="Blog"
											className="w-full rounded-md rounded-br-none rounded-bl-none h-64 w-full object-cover"
										/>
									</LazyLoad>
									<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black pt-4 text-left px-4 sm:text-5xl sm:leading-none md:text-3xl">
										How to Be More Creative: 10 Actionable Tips
									</h2>
									<p className="p-4 text-base text-grey text-left sm:text-lg sm:max-w-xl lg:text-xl">
										Read the story in our company blog.
									</p>
								</div>
							</li>
						</Link>
					</ul>
				</div>
			</section>
		</>
	);
}
