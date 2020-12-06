import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Blog | Midday</title>
			</Head>
			<section className="py-12">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-5xl sm:leading-none md:text-6xl mb-12">
						Our Blogs
					</h2>
					<p className="mt-4 text-lg text-center leading-7 text-grey mb-12 mx-auto max-w-md">
						All Blog Posts
					</p>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
								</div>
							</li>
						</Link>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi natus ut
										totam corporis at? Tempore quas voluptates culpa officia!
									</p>
									<Link href="/blog-detail-1">
										<a>
											<p className="text-base text-secondary font-bold text-left sm:text-lg ml-4 mx-2 mb-4 transform duration-75 hover:-translate-y-1">
												Learn More
												<span className="fa-stack fa-sm cursor-pointer">
													<i className="fa fa-arrow-right fa-stack-1x"></i>
												</span>
											</p>
										</a>
									</Link>
								</div>
							</li>
						</Link>
					</ul>
				</div>
			</section>
		</>
	);
}
