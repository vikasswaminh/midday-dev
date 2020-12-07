import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import LazyLoad from "react-lazyload";

export default function BlogDetail1() {
	return (
		<>
			<Head>
				<title>Blog Detail | Midday</title>
			</Head>
			<section className="py-12">
				<div className="container px-4 mx-auto px-4">
					<h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black text-left sm:text-5xl sm:leading-none md:text-6xl mb-12">
						Website Speed impact on Revenue
					</h2>
					<div className="w-full bg-gray mb-8" style={{ height: "1px" }}></div>
					<p className="mt-4 text-lg text-grey leading-7 text-black mb-12">
						PUBLISHED ON 06 DECEMBER 2020
					</p>

					<div className="max-w-2xl mx-auto">
						<p className="text-lg tracking-normal leading-9 text-grey">
							In that time you would have lost 40% of your customers. Yes it takes only a latency of
							three seconds to lose your customers and that is what we are going to talk about in
							this blog.
							<br></br>
							<br></br>
							In this digital era, we are all aware of the importance of having our own website.
							People mostly focus on organising their website content with lucrative graphics,
							amazing videos, page navigation, mobile friendly features and some SEO attributes. But
							the website speed is mostly ignored. If your website is taking long to respond, it is
							literally killing the sales and revenue. A slow website can frustrate your potential
							customer which is something you would definitely not want. If you want your user
							experience unhindered such that the visitors can effortlessly receive the information
							they are actually exploring for, one must make sure about their website load time. A
							single second delay can result in contributing to 10% of bounce rate.
						</p>
					</div>
					<img
						src="https://lh6.googleusercontent.com/uvOFqGWXH6rwgFRRS84xNcijPEUuLrGkvx3rQp_qcD0IBoi-Ckrmn_eh4m7qHiENCMRG86XAfw4ALeh5M_VlRt5PVI1kEe-SJ8t_9WRg_Ny-BZNtizEVWCIrWyut-8SZuCo_XfhlHZ6Ck8Ri"
						className="max-w-3xl mx-auto py-6"
					/>

					<div className="max-w-2xl mx-auto">
						<p className="text-lg tracking-normal leading-9 text-grey">
							Bounce Rate Studies
							<br></br>
							<br></br>
							There have been various studies and research of how the webpage load time impacts
							businesses. About 50% of the users expect web page load time to be less than two
							seconds. And if the loading time is more than 3 seconds, a lot of users are lost.
							<br></br>
							<br></br>
							Around 80% of users claim that they don't return to the web pages taking long load
							time since it is a direct relation with the performance. This is seen more often in
							online shopping. Thus, online shopping websites are no more just about aesthetics and
							customer service, but the focus must also be in page speed and responsiveness.
							<br></br>
							<br></br>
							The bounce rate has been seen to decrease tremendously even with a second. An average
							bounce rate of 9% is seen for pages that load within two second. While the bounce rate
							is much higher, an average of 38% for page that take five seconds to load. High bounce
							rates indicate that the visitors landing on your page aren't staying for long. Which
							means that they are not going through your content.
							<br></br>
							<br></br>
							It has also been seen that a delay of even 1 second sees a 16% reduction of in
							customer satisfaction and is capable of eating away potential leads by 7%. So a delay
							in even 1 second is a lot a business would be risking for.
						</p>
					</div>
					<img
						src="https://lh5.googleusercontent.com/g9h1rPWFJERMiku3eiiPCsfRudTRCduCFNexzWWNsyYzuMrSpeLG4PJe9I7A2vFesR7n7o84riYa6Enoe2LZjOxUWKiu_D-hINq6rGdZWwqnpGsqE-4cMTRrQOLPG2GQgd2SiGwdv2asctwJ"
						className="max-w-3xl mx-auto py-6"
					/>

					<div className="max-w-2xl mx-auto">
						<p className="text-lg tracking-normal leading-9 text-grey">
							Let's take a look at the giants
							<br></br>
							<br></br>
							With all that statistics, let us look at some real world examples of how load speed
							has cost businesses millions and billions of losses and have even saved them from the
							same.
							<br></br>
							<br></br>
							<ul className="list-disc ml-8 text-primary">
								<li className="py-2 text-secondary">Amazon</li>
							</ul>
							Exact 13 years ago, for every lag of 100ms, the company faced a loss of 1% in sales.
							Due to this latency, Amazon faced a loss of $1.6 billion or 10% of revenue. Since then
							things have not got easier, infact, it has been estimated that businesses could now
							lose 6% sales due to a latency of 100ms. Since customers are not easy to wait for even
							one second for Amazon, it could come out to be a serious impact on your sales
							conversion.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
