import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="bg-gradient pt-16 sm:pt-24 pb-16">
        <div className="container mx-auto px-5">
          <h1 className="mt-2 md:text-6xl text-white text-center leading-8 font-bold tracking-tight text-5xl sm:leading-10 mb-16">
            Contact Us
          </h1>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mbjpalad"
            method="POST"
            className="w-full max-w-2xl bg-white p-8 rounded mx-auto shadow-lg"
          >

            <div
              className={
                status === "SUCCESS"
                  ? 'block mb-8'
                  : 'hidden'
              }
            >
              <p className="text-center text-xl text-green-500 bg-green-100 p-4">Form has been submitted successfully!</p>
            </div>
            <div
              className={
                status === "ERROR"
                  ? 'mb-8 block'
                  : 'hidden'
              }
            >
              <p className="text-center text-xl text-red-500 bg-red-100 p-4">Oops, something went wrong.</p>
            </div>
            <div className="flex items-center border-b border-primary py-2">
              <input className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none" type='text'
                placeholder='Name'
                name='name'
                required />
            </div>
            <div className="flex items-center border-b border-primary py-2 mt-4">
              <input className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none" type='text'
                placeholder='Surname'
                name='surname'
                required />
            </div>
            <div className="flex items-center border-b border-primary py-2 mt-4">
              <input className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none" type='email'
                placeholder='Email'
                name='email'
                required />
            </div>
            <div className="flex items-center border-b border-primary py-2 mt-4">
              <input className="appearance-none bg-transparent border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none" type='phone'
                placeholder='Phone'
                name='phone'
              />
            </div>
            <div className="flex items-center border-b border-primary py-2 mt-4">
              <textarea className="appearance-none bg-transparent border-none w-full h-24 text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                style={{ resize: 'none' }}
                placeholder='Message'
                name='message'
                required />
            </div>
            <div className="grid sm:grid-cols-2 col-gap-8 row-gap-2 mt-4">
              <div className="flex flex-col py-2 mt-4">
                <label className="block text-left font-bold text-lg mb-2 text-primary">Mode Of Training?</label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-primary hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    name="mode">
                    <option>Classroom</option>
                    <option>Online</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>

              </div>
              <div className="flex flex-col py-2 mt-4">
                <label className="block text-left font-bold text-lg mb-2 text-primary">Regular or Weekends?</label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-primary hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    name="time">
                    <option>Regular</option>
                    <option>Weekends</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="bg-primary text-white active:bg-gradient font-bold uppercase text-lg px-4 py-2 mt-8 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 watch-video"
              type="submit"
              style={{ transition: "all .15s ease" }}>
              Submit
        </button>
          </form>
        </div>
      </div>
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