import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function WebDesignDevelopment() {
	return (
		<>
			<Head>
				<title>Web Design & Development | Midday</title>
			</Head>
			<section className="bg-gray w-full py-16 sm:py-40">
				<Container>
					<h1 className="text-4xl leading-snug font-extrabold text-center mx-auto sm:text-5xl md:text-6xl max-w-xl">
						Creative, flexible and affordable website design
					</h1>
					<div className="mt-5 sm:mt-8 sm:flex justify-center">
						<div className="rounded-md shadow">
							<Link href="/contact-us">
								<a className="w-full flex mb-4 items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white bg-primary hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
									Get It Now
								</a>
							</Link>
						</div>
						<div className="rounded-md shadow md:ml-4">
							<Link href="/about">
								<a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-black border-2 border-black bg-white hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
									Learn More
								</a>
							</Link>
						</div>
					</div>
				</Container>
			</section>

			<h2 className="text-4xl max-w-xl mx-auto tracking-tight leading-10 font-extrabold text-black text-center sm:text-3xl sm:leading-none md:text-5xl my-16">
				Web Design and Development Process
			</h2>

			<section id="conference-timeline">
				<div className="timeline-start bg-primary">Start</div>
				<div className="conference-center-line bg-primary" />
				<div className="conference-timeline-content">
					{/* Article */}
					<div className="timeline-article pt-16">
						<div className="content-left-container">
							<div className="content-left">
								<img src="/assets/timeline-1.jpg" className="sm:mt-12" />
							</div>
						</div>
						<div className="content-right-container">
							<div className="content-right">
								<h3 className="text-2xl leading-6 font-bold">Requirement Collection</h3>
								<div className="text-grey mt-4">
									Our dedicated project manager will collect precise requirements and expectations.
									You will be sent a detail form to provide us all details before starting the
									project followed by one on meeting over Zoom.
								</div>
							</div>
						</div>
						<div className="meta-date bg-primary flex items-center justify-center">
							<div className="font-lg font-bold">1</div>
						</div>
					</div>
					{/* // Article */}
					{/* Article */}
					<div className="timeline-article pt-16">
						<div className="content-left-container">
							<div className="content-left">
								<h3 className="text-2xl leading-6 font-bold">Design Mockup</h3>
								<div className="text-grey mt-4">
									Our Design team will draft a mock of each page and will provide you with a layout.
									After your approval the project goes coding phase
								</div>
							</div>
						</div>
						<div className="content-right-container">
							<div className="content-right">
								<img src="/assets/timeline-2.jpg" className="sm:mt-12" />
							</div>
						</div>
						<div className="meta-date bg-primary flex items-center justify-center">
							<div className="font-lg font-bold">2</div>
						</div>
					</div>
					{/* // Article */}
					{/* Article */}
					<div className="timeline-article pt-16">
						<div className="content-left-container">
							<div className="content-left">
								<img src="/assets/timeline-3.jpg" className="sm:mt-12" />
							</div>
						</div>
						<div className="content-right-container">
							<div className="content-right">
								<h3 className="text-2xl leading-6 font-bold">Coding Starts</h3>
								<div className="text-grey mt-4">
									After Layout and feature approval, our coding team will code the layout to Html or
									React or Angular or any other framework needed as per initial requirements.
								</div>
							</div>
						</div>
						<div className="meta-date bg-primary flex items-center justify-center">
							<div className="font-lg font-bold">3</div>
						</div>
					</div>
					{/* // Article */}
					{/* Article */}
					<div className="timeline-article pt-16">
						<div className="content-left-container">
							<div className="content-left">
								<h3 className="text-2xl leading-6 font-bold">Project Delivery</h3>
								<div className="text-grey mt-4">
									Finally project is sent for your approval, any changes required will be executed
									as per customer suggestions
								</div>
							</div>
						</div>
						<div className="content-right-container">
							<div className="content-right">
								<img src="/assets/timeline-4.jpg" className="sm:mt-12" />
							</div>
						</div>
						<div className="meta-date bg-primary flex items-center justify-center">
							<div className="font-lg font-bold">4</div>
						</div>
					</div>
					{/* // Article */}
				</div>
				<div className="timeline-end bg-primary">End</div>
			</section>

			<section className="py-24 bg-white">
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
