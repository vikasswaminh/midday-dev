import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function Index() {
	return (
		<>
			<Head>
				<title>Midday Dev</title>
			</Head>

			<section className="bg-hero w-full py-16 sm:py-40">
				<Container>
					<div className="grid sm:grid-cols-2 col-gap-8 row-gap-16 pb-16">
						<div>
							<div className="sm:text-center lg:text-left">
								<h3 className="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-lg sm:leading-none captilaize mb-4 uppercase">
									Your Vision Brought To Life.
								</h3>
								<h1 className="text-4xl leading-snug font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
									You provide the
									<span className="text-primary"> Vision</span>
									<br></br>
									We provide the
									<span className="text-secondary"> Solution</span>
								</h1>
								<p className="mt-3 text-base text-grey sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, saepe molestiae
									amet distinctio tenetur dignissimos eum, fuga atque mollitia earum asperiores nemo
									fugit? Tenetur laborum assumenda eaque voluptates aliquid dolores.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white  bg-black hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
												Get Started
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="sm:px-16 relative">
							<div className="h-64 w-full rounded bg-gray relative flex items-center justify-center">
								<div className="rounded-full h-16 w-16 bg-primary flex items-center justify-center text-white">
									<span className="fa-stack fa-lg ml-1 cursor-pointer">
										<i className="fa fa-play fa-stack-1x"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-12 bg-white">
				<div className="container px-4 mx-auto px-4">
					<h1 className="text-4xl leading-snug font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						If you can
						<span className="text-primary"> Imagine</span> it, we can
						<br></br>
						<span className="text-secondary"> Create</span> it.
					</h1>
					<p className="mt-4 text-xl text-left leading-7 text-grey max-w-4xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quaerat facilis
						temporibus ex, explicabo commodi. Ipsum ducimus deserunt repellat corporis.
					</p>
					<ul className="grid md:grid-cols-3 col-gap-8 row-gap-10 mt-8">
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold">Feature 1</h3>
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
									<h3 className="text-lg leading-6 font-bold">Feature 2 </h3>
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
									<h3 className="text-lg leading-6 font-bold">Feature 3</h3>
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
									<h3 className="text-lg leading-6 font-bold">Feature 4</h3>
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
									<h3 className="text-lg leading-6 font-bold">Feature 5 </h3>
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
									<h3 className="text-lg leading-6 font-bold">Feature 6</h3>
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

			<section className="py-12 bg-primary">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
						All in one package
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-white mb-12">
						Get Website including all features like these
					</p>
					<ul className="grid sm:grid-cols-2 md:grid-cols-4 col-gap-8 row-gap-10 justify-center">
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Great Designs
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									Powerful and beautiful websites for your project. Our UI and UX team is respected
									team of designers. Give it a try and see a sample designed
								</p>
								<Link href="/digital-marketing">
									<a>
										<p className="text-base text-primary font-bold text-left sm:text-lg mt-6 transform duration-75 hover:-translate-y-1">
											Learn More
											<span className="fa-stack fa-sm cursor-pointer">
												<i className="fa fa-arrow-right fa-stack-1x"></i>
											</span>
										</p>
									</a>
								</Link>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									SEO
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									Search Engine optimization after keyword research by SEM Rush and other tools .
									Donot need to pay $200 a additional like other agency asks
								</p>
								<Link href="/digital-marketing">
									<a>
										<p className="text-base text-primary font-bold text-left sm:text-lg mt-6 transform duration-75 hover:-translate-y-1">
											Learn More
											<span className="fa-stack fa-sm cursor-pointer">
												<i className="fa fa-arrow-right fa-stack-1x"></i>
											</span>
										</p>
									</a>
								</Link>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Unlimited Designs
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									We have inhouse team of designers so we provide unlimited design changes. We will
									work till you feel satisfied with our design we made for you.
								</p>
								<Link href="/digital-marketing">
									<a>
										<p className="text-base text-primary font-bold text-left sm:text-lg mt-6 transform duration-75 hover:-translate-y-1">
											Learn More
											<span className="fa-stack fa-sm cursor-pointer">
												<i className="fa fa-arrow-right fa-stack-1x"></i>
											</span>
										</p>
									</a>
								</Link>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Customer Support
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									24*7 Team including a dedicated account manager. We are available on Whatsapp,
									email and phone call all the time
								</p>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Free Updates
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									Get your website managed free of cost for first 6 months. Any number of changes
									accepted.
								</p>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "270px" }}
							>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-2xl sm:leading-none md:text-2xl mb-4">
									SSL Certificates
								</h2>
								<p className="text-base text-grey text-left sm:text-md">
									No need to spend $100 USD for branded SSL, we will provide you with Free SSL and
									100% secure website
								</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-12 bg-primary pb-32">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
						Our Services
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-white mb-12 mx-auto max-w-md">
						We are a one-stop shop for all types of Software related activities.Here are a couple of
						services,we offer
					</p>
					<ul className="grid sm:grid-cols-2 col-gap-8 row-gap-10 justify-center max-w-3xl mx-auto">
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "390px" }}
							>
								<img
									src="/assets/hand-icon.svg"
									alt="Hand Icon"
									className="w-12 h-12 -mt-12 mx-auto mb-8"
								/>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Great Designs
								</h2>
								<p className="text-base text-grey text-center sm:text-md">
									Powerful and beautiful websites for your project. Our UI and UX team is respected
									team of designers. Give it a try and see a sample designed
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="mx-auto w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-secondary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-sm md:px-10">
												Learn More
											</a>
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "390px" }}
							>
								<img
									src="/assets/book-icon.svg"
									alt="Hand Icon"
									className="w-12 h-12 -mt-12 mx-auto mb-8"
								/>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Web Design & Development
								</h2>
								<p className="text-base text-grey text-center sm:text-md">
									We offer web design and development services which prove to be effective tools of
									marketing and ensure return on investment. Our web development services combine
									advanced web design technology with latest business concepts to make your website
									attractive and easy to understand & use
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="mx-auto w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-secondary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-sm md:px-10">
												Learn More
											</a>
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "390px" }}
							>
								<img
									src="/assets/cookie-icon.svg"
									alt="Hand Icon"
									className="w-12 h-12 -mt-12 mx-auto mb-8"
								/>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Software Development
								</h2>
								<p className="text-base text-grey text-center sm:text-md">
									Midday Developer has dedicated Mobile App Developers who can create both Android
									and iOS Mobile Application. We help you in building applications for your every
									need, whether it is your business or enterprises. We had already launched a number
									of successful applications previously and the clients were completely satisfied.
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="mx-auto w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-secondary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-sm md:px-10">
												Learn More
											</a>
										</Link>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div
								className="card rounded-lg bg-gray shadow-lg flex flex-col p-6"
								style={{ minHeight: "390px" }}
							>
								<img
									src="/assets/hand-icon.svg"
									alt="Hand Icon"
									className="w-12 h-12 -mt-12 mx-auto mb-8"
								/>
								<h2 className="text-xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-2xl sm:leading-none md:text-2xl mb-4">
									Digital Marketing
								</h2>
								<p className="text-base text-grey text-center sm:text-md">
									we are a leading online marketing agency that offers a comprehensive range of
									services to help your business grow. We help you overcome the challenges and solve
									problems related to maximizing your online reach
								</p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="mx-auto w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-secondary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-sm md:px-10">
												Learn More
											</a>
										</Link>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="bg-primary relative pb-24">
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
							We are a one-stop shop for all types of Software related activities.Here are a couple
							of services,we offer
						</p>
						<ul className="mt-6 list-disc ml-8 text-primary transform -rotate-3">
							<li className="py-2 text-secondary">hello</li>
							<li className="py-2 text-secondary">hello</li>
							<li className="py-2 text-secondary">hello</li>
							<li className="py-2 text-secondary">hello</li>
							<li className="py-2 text-secondary">hello</li>
						</ul>

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
			</section>

			<section className="py-12">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
						Our Blogs
					</h2>
					<ul className="grid md:grid-cols-3 col-gap-8 row-gap-10">
						<li>
							<div className="card rounded-lg shadow-lg flex flex-col">
								<LazyLoad>
									<img
										src="/assets/blog-1.jpg"
										alt="Top instructors in networkers home"
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
            <li>
							<div className="card rounded-lg shadow-lg flex flex-col">
								<LazyLoad>
									<img
										src="/assets/blog-2.jpg"
										alt="Top instructors in networkers home"
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
            <li>
							<div className="card rounded-lg shadow-lg flex flex-col">
								<LazyLoad>
									<img
										src="/assets/blog-3.jpg"
										alt="Top instructors in networkers home"
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
					</ul>
				</div>
			</section>

      <section className="py-12 bg-white">
				<div className="container px-4 mx-auto px-4">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
						You Ask -- We Tell
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-grey mb-12 mx-auto max-w-md">
          Musas sunt boreass de varius elevatus. Ferox, camerarius homos inciviliter resuscitabo de talis, bassus mens.
					</p>
					<ul className="grid sm:grid-cols-2 col-gap-8 row-gap-10 mt-8 max-w-3xl mx-auto">
						<li>
							<div className="flex">
								<div className="ml-4 md:mt-3">
									<h3 className="text-2xl leading-6 font-bold text-secondary">What is Unicorn Platform?</h3>
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
									<h3 className="text-2xl leading-6 font-bold text-secondary">What is Unicorn Platform?</h3>
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
									<h3 className="text-2xl leading-6 font-bold text-secondary">What is Unicorn Platform?</h3>
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
									<h3 className="text-2xl leading-6 font-bold text-secondary">What is Unicorn Platform?</h3>
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
		</>
	);
}
