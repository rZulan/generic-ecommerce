import { Box } from "@mui/material"
import Skeleton from '@mui/material/Skeleton';


const LoadingSkeleton = () => {
  return (
    <>
    <div className="grid w-2/3 grid-cols-5 gap-5 pt-5 m-auto text-center">
				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
                        <Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
                        <Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>

				<div className="grid text-left ">
					<Box
						sx={{
							width: 225,
							display: "flex",
							alignItems: "center",
							borderRadius: 20
						}}
					>
						<Skeleton variant="rectangular" width={345} height={275} />
					</Box>
				</div>
			</div>
		</>
  )
}

export default LoadingSkeleton