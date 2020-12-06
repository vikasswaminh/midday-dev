import React from "react";
import Link from "next/link";

export default function Navbar({ allCategories }) {
	const [showSidebar, setShowSidebar] = React.useState(false);
	return (
		<>
			<nav className="main-nav bg-white w-full fixed top-0 left-0 z-20 shadow-xl">
				<div
					className="container flex justify-between items-center w-full h-16 pr-4 sm:pr-0 mx-auto"
					style={{ display: "-webkit-flex" }}
				>
					<div className="logo">
						<a href="/">
							<img src="/assets/logo.png" alt="Logo" className="w-64 h-full" />
						</a>
					</div>
					<div className="nav-items justify-end mr-4 hidden lg:flex">
						<div className="nav-item mr-2 text-sm text-primary hover:opacity-75 cursor-pointer font-bold">
							<div className="group inline-block">
								<button className="outline-none focus:outline-none px-3 py-2 bg-white rounded-sm flex items-center">
									<Link href="/">
										<a>
											<span className="pr-1 font-semibold flex-1 text-sm uppercase cursor-pointer font-bold uppercase">
												Home
											</span>
										</a>
									</Link>
								</button>
							</div>
						</div>
						<div className="nav-item mr-2 text-sm text-primary hover:opacity-75 cursor-pointer font-bold">
							<div className="group inline-block">
								<button className="outline-none focus:outline-none px-3 py-2 bg-white rounded-sm flex items-center">
									<Link href="/about">
										<a>
											<span className="pr-1 font-semibold flex-1 text-sm uppercase cursor-pointer font-bold uppercase">
												About
											</span>
										</a>
									</Link>
								</button>
							</div>
						</div>
						<div className="nav-item mr-2 text-sm text-primary cursor-pointer font-bold">
							<div className="group inline-block">
								<button className="outline-none focus:outline-none px-3 py-2 bg-white rounded-sm flex items-center">
									<span className="pr-1 font-semibold flex-1 text-sm uppercase cursor-pointer font-bold uppercase">
										Primary Services
									</span>
									<span>
										<svg
											className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</span>
								</button>
								<ul className="bg-white rounded-md p-6 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
									<Link href="/web-design-development">
										<a>
											<li className="rounded-sm px-3 py-3 text-primary text-sm opacity-100 hover:opacity-75 cursor-pointer">
												Web Design & Development
											</li>
										</a>
									</Link>
									<Link href="/digital-marketing">
										<a>
											<li className="rounded-sm px-3 py-3 text-primary text-sm opacity-100 hover:opacity-75 cursor-pointer">
												Digital Marketing
											</li>
										</a>
									</Link>
								</ul>
							</div>
						</div>
						<div className="nav-item mr-2 text-sm text-primary hover:opacity-75 cursor-pointer font-bold">
							<div className="group inline-block">
								<button className="outline-none focus:outline-none px-3 py-2 bg-white rounded-sm flex items-center">
									<Link href="/blog">
										<a>
											<span className="pr-1 font-semibold flex-1 text-sm uppercase cursor-pointer font-bold uppercase">
												Blog
											</span>
										</a>
									</Link>
								</button>
							</div>
						</div>
						<div className="nav-item text-sm text-primary hover:opacity-75 uppercase cursor-pointer font-bold">
							<div className="group inline-block">
								<button className="outline-none focus:outline-none px-4 py-2 rounded bg-white rounded-sm flex items-center bg-primary text-white">
									<Link href="/contact">
										<a>
											<span className="font-semibold flex-1 text-sm uppercase cursor-pointer font-bold">
												Contact
											</span>
										</a>
									</Link>
								</button>
							</div>
						</div>
					</div>
					<div
						className="hamburger flex lg:hidden cursor-pointer"
						onClick={() => setShowSidebar(true)}
					>
						<svg
							className="fill-current text-primary w-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</div>
				</div>
			</nav>

			{showSidebar && (
				<div className="sidebar w-64 bg-primary h-screen overflow-scroll fixed top-0 right-0 pt-2 pl-px z-30">
					<div className="flex justify-between items-center h-16 px-4">
						<h5>
							<span className="pr-1 font-semibold text-white flex-1 text-lg uppercase cursor-pointer font-bold uppercase">
								Menu
							</span>
						</h5>
						<div className="close cursor-pointer" onClick={() => setShowSidebar(false)}>
							<svg
								className="fill-current text-white w-6 "
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
							</svg>
						</div>
					</div>

					<ul className="py-4 pl-2 mt-2 mx-2 border-b-2 border-white">
						<Link href="/">
							<a>
								<li className="pl-3 py-2 text-white text-md uppercase font-bold">Home</li>
							</a>
						</Link>
					</ul>

					<ul className="py-4 pl-2 mt-2 mx-2 border-b-2 border-white">
						<Link href="/about">
							<a>
								<li className="pl-3 py-2 text-white text-md uppercase font-bold">About</li>
							</a>
						</Link>
					</ul>

					<ul className="py-4 pl-2 mt-2 mx-2 border-b-2 border-white">
						<li className="pl-3 py-2 text-white text-md uppercase font-bold">Primary Services</li>
						<Link href="/web-design-development">
							<a>
								<li className="pl-6 py-2 text-white text-sm hover:opacity-75 cursor-pointer">
									Web Design & Development
								</li>
							</a>
						</Link>
						<Link href="/digital-marketing">
							<a>
								<li className="pl-6 py-2 text-white text-sm hover:opacity-75 cursor-pointer">
									Digital Marketing
								</li>
							</a>
						</Link>
					</ul>

          <ul className="py-4 pl-2 mt-2 mx-2 border-b-2 border-white">
						<Link href="/blog">
							<a>
								<li className="pl-3 py-2 text-white text-md uppercase font-bold">Blog</li>
							</a>
						</Link>
					</ul>

					<ul className="py-4 pl-2 mt-2 mx-2 border-b-2 border-white">
						<a href="https://networkershome.com/contact">
							<li className="pl-3 py-2 text-white text-md hover:opacity-75 cursor-pointer uppercase font-bold">
								Contact
							</li>
						</a>
					</ul>
				</div>
			)}
		</>
	);
}
