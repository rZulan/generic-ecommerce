import { Button, Card, CardActionArea, CardContent, CardMedia, Link, Rating, Typography } from '@mui/material'
import { useGetAllProductsQuery } from './redux/api/productsAPI'
import Header from './components/Header'

const HomeTesting = () => {   
    const { data } = useGetAllProductsQuery()
    console.log(data)

  return (
    <>
        <div className="flex justify-center h-8 bg-sky-950">
			<div className="pt-1">
				<Typography color={"white"}>
					Get up to 70% off on selected items!
				</Typography>
			</div>
		</div>

        <Header />

        <div className="grid w-2/3 grid-cols-6 grid-rows-2 pt-5 gap-1 m-auto">
				<div className="col-span-4 row-span-2">
					<Link><img src="https://picsum.photos/1000/300" alt="" /></Link>
				</div>

				<div className="col-span-2">
					<Link><img src="https://picsum.photos/1200/355" alt="" /></Link>
				</div>
				
				<div className="col-span-2">
					<Link><img src="https://picsum.photos/1200/355" alt="" /></Link>
				</div>
		</div>

        <div className="flex justify-center pt-5">
            <Typography variant="h4">New Collection</Typography>
        </div>
        <div className="flex justify-center">
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.
            </Typography>
        </div>

        <div className="grid w-2/3 grid-cols-5 gap-3 pt-5 m-auto text-center" >
                {data?.map((products) => {
                     return (
                     <>
                            <div className="grid text-left text-wrap mb-5" > 
                                <Card key={products.id} sx={{ maxWidth: 345, height: 275,}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="30"
                                            alt={products.title}
                                            image={products.image}
                                            sx={{padding: "1em 1em 0 1em", objectFit: 'contain', height: 185}}
                                        />
                                            <CardContent>
                                                <Typography variant="subtitle2" className='truncate'>
                                                    {products.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{color: 'red'}}>
                                                    <b>${products.price}</b>
                                                </Typography>
                                                <div className='flex'>
                                                <Rating 
                                                    name="read-only" 
                                                    value={products.rating.rate} 
                                                    precision={0.1} 
                                                    readOnly 
                                                    size='small'
                                                />
                                                <Typography variant='caption' sx={{color: 'text.secondary'}}>({products.rating.count})</Typography>
                                                </div>
                                            </CardContent>
                                    </CardActionArea>
                                </Card>
                             </div>
                     </>
                    )
                })}
        </div>

        <div className="flex justify-center pt-10">
				<Typography variant="h4">Other Collection</Typography>
			</div>
			<div className="flex justify-center ">
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis.
				</Typography>
			</div>
			<div className="flex justify-center pt-5">
				<Button
					variant="contained"
					sx={{ borderRadius: 20, color: "white", backgroundColor: "blue[300]" }}
				>
					Browse other collections
				</Button>
			</div>

        <div className="flex flex-wrap h-16 mt-10 bg-sky-950">
				<div className="pt-5 pl-10">
					<Typography color={"white"}>© 2024 Zulan Productions</Typography>
				</div>

				<div className="flex justify-end flex-1 pr-10 gap-9">
					<div className="pt-5 pl-5">
						<Link>
							<Typography color={"white"}>Terms and Conditions</Typography>
						</Link>
					</div>
					<div className="pt-5 pl-5">
						<Link>
							<Typography color={"white"}>Privacy Policy</Typography>
						</Link>
					</div>
				</div>
		</div>
    </>
  )
}

export default HomeTesting