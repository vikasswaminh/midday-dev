import React from "react";

export default class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<>
				<h3 className="pt-4 text-2xl text-center">Send A Message! </h3>
				<div className={status === "SUCCESS" ? "block mb-8" : "hidden"}>
					<p className="text-center text-xl text-green-500 bg-green-100 p-4">
						Form has been submitted successfully!
					</p>
				</div>
				<div className={status === "ERROR" ? "mb-8 block" : "hidden"}>
					<p className="text-center text-xl text-red-500 bg-red-100 p-4">
						Oops, something went wrong.
					</p>
				</div>
				<form onSubmit={this.submitForm} action="https://formspree.io/f/mpzoyzyr" method="POST">
					<div className="mb-4">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
							Full Name
						</label>
						<input
							className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-grey border border-grey rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							name="FullName"
							type="text"
							placeholder="Full Name"
							required
						/>
					</div>

					<div className="mb-4 md:grid md:grid-cols-2">
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
								Phone
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								name="Phone"
								type="number"
								placeholder="Phone"
								required
							/>
						</div>
						<div className="md:ml-2">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
								Email
							</label>
							<input
								className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								name="Email"
								type="email"
								placeholder="Email"
								required
							/>
						</div>
					</div>
					<div className="mb-4">
						<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
							Message
						</label>
						<textarea
							className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border-grey border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							name="Message"
							type="text"
							placeholder="Message"
							required
						/>
					</div>
					<div>
						<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
							<input
								type="checkbox"
								name="terma"
								id="toggle"
								required
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
							<button
								type="submit"
								className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-bold uppercase rounded-md text-white  bg-black hover:opacity-75 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-10"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
