import Slider from "react-slick"

const Item = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}

	return (
		<>
			<div className="flex flex-row h-16 text-white bg-black">
				<ul className="flex flex-row flex-1 gap-5">
					<li>Home</li>
					<li>Cart</li>
				</ul>
				<h1 className="flex-1 text-2xl text-center">E-Commerce</h1>
				<h1 className="flex-1 text-right">Logout</h1>
			</div>
			<div className="flex">
				<div className="flex flex-col bg-slate-400">
					<img src="https://picsum.photos/400" className="w-96" />
					<div className="m-auto mt-5 w-72">
						<Slider {...settings}>
							<div>
								<img src="https://picsum.photos/1001" />
							</div>
							<div>
								<img src="https://picsum.photos/1002" />
							</div>
							<div>
								<img src="https://picsum.photos/1003" />
							</div>
							<div>
								<img src="https://picsum.photos/1004" />
							</div>
							<div>
								<img src="https://picsum.photos/1005" />
							</div>
							<div>
								<img src="https://picsum.photos/1006" />
							</div>
						</Slider>
					</div>
				</div>
				<div>
					<h1>Item #1</h1>
				</div>
			</div>
		</>
	)
}

export default Item
