import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us | Midday</title>
			</Head>
			<div className="container mx-auto px-4 pt-12">
				<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-center sm:text-3xl sm:leading-none md:text-5xl mb-4">
					Contact Us
				</h2>
				<div className="sm:flex justify-center my-12">
					{/* Row */}
					<div className="w-full sm:flex">
						{/* Col */}
						<div className="w-full h-auto bg-gray-400 lg:w-5/12 bg-cover rounded-l-lg">
							<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-xl sm:leading-none md:text-3xl mb-4">
								Address
							</h2>
							<p className="mt-4 text-lg text-left leading-7 text-grey mb-12">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a.
							</p>
							<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-xl sm:leading-none md:text-3xl mb-4">
								Technical Support
							</h2>
							<p className="mt-4 text-lg text-left leading-7 text-grey mb-12">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a.
							</p>
							<h2 className="text-2xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-xl sm:leading-none md:text-3xl mb-4">
								Connect with us
							</h2>
							<div className="flex mb-4 sm:mb-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<a href="#" target="_blank">
											<div className="flex items-center justify-center h-12 w-12 rounded-md text-black cursor-pointer">
												<span className="fa-stack fa-lg">
													<i className="fa fa-facebook fa-stack-2x"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<a href="#" target="_blank">
											<div className="flex items-center justify-center h-12 w-12 rounded-md text-black cursor-pointer">
												<span className="fa-stack fa-lg">
													<i className="fa fa-youtube fa-stack-2x"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
								<div className="flex">
									<div className="flex-shrink-0">
										<a href="#" target="_blank">
											<div className="flex items-center justify-center h-12 w-12 rounded-md text-black cursor-pointer">
												<span className="fa-stack fa-lg">
													<i className="fa fa-linkedin fa-stack-2x"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* Col */}
						<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
							<h3 className="pt-4 text-2xl text-center">Send A Message! </h3>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
										Full Name
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-grey border border-grey rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="text"
										type="text"
										placeholder="Full Name"
									/>
								</div>

								<div className="mb-4 md:grid md:grid-cols-2">
									<div className="mb-4 md:mr-2 md:mb-0">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
											htmlFor="firstName"
										>
											Phone
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="phone"
											type="number"
											placeholder="Phone"
										/>
									</div>
									<div className="md:ml-2">
										<label
											className="block mb-2 text-sm font-bold text-gray-700"
											htmlFor="lastName"
										>
											Email
										</label>
										<input
											className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
											id="email"
											type="text"
											placeholder="Email"
										/>
									</div>
								</div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
										Message
									</label>
									<textarea
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="message"
										type="text"
										placeholder="Message"
									/>
								</div>
								<div>
									<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
										<input
											type="checkbox"
											name="toggle"
											id="toggle"
											className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
										/>
										<label
											htmlFor="toggle"
											className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
										/>
									</div>
									<label htmlFor="toggle" className="text-xs text-gray-700">
										Accept terms and conditions.
									</label>
								</div>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<Link href="/contact-us">
											<a className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white  bg-black hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10">
												Submit
											</a>
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<iframe
				className="w-full h-64 shadow-md"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4425123198234!2d77.31047718577601!3d28.586498763957096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047503e52309%3A0xe7031b4d3dc7e52f!2sNETWORKERS%20HOME%20NOIDA-%20CCNA%2CCCIE%2CCCNP%2C%20AWS%2CAZURE%2CMCSA%2CMCSE!5e0!3m2!1sen!2s!4v1603213699970!5m2!1sen!2s"
				frameBorder={0}
				style={{ border: 0 }}
				allowFullScreen
				aria-hidden="false"
				tabIndex={0}
			/>
		</>
	);
}
