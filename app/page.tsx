import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<div className="flex justify-center items-center w-full border-b border-[#D8D8D8] py-6">
				<div className="relative w-[130px] h-[30px] xs:w-[180px] xs:h-[38px]">
					<Image
						className="object-cover"
						src="/logo.svg"
						alt="Print padi logo"
						fill
						priority
					/>
				</div>
			</div>
			<div className="flex px-3 flex-col justify-center items-center xs:flex-row xs:items-center h-[80vh] xs:justify-center xs:space-x-16">
				<div className="w-full xs:max-w-[553px] flex flex-col justify-center items-center xs:items-start">
					<h3 className="font-bold text-5xl xs:text-[56px] text-center xs:text-left">
						⚠️Page Under Construction
					</h3>
					<div className="flex xs:hidden">
						<Image
							className=""
							src="/caution.png"
							alt="site under construction"
							height={300}
							width={300}
							priority
						/>
					</div>
					<p className="font-normal text-xl text-center xs:text-left xs:text-2xl mt-3 mb-8">
						We’re sorry for the inconvenience. While we work on improving your
						experience, you can still reach us directly on WhatsApp.
					</p>
					<Link href={"https://wa.me/message/6J4E5NXS4LHSL1"} className="">
						<button
							aria-label="continue on whatsapp"
							className="flex items-center space-x-3 cursor-pointer rounded-lg bg-black text-white font-medium text-lg xs:text-2xl py-2.5 xs:py-[18px] px-3"
						>
							<div className="h-5 w-5 xs:h-[33px] xs:w-[33px] relative">
								<Image
									className="object-cover"
									src="/whatsapp-icon.svg"
									alt="continue on whatsapp"
									fill
								/>
							</div>
							<span>Order on WhatsApp</span>
						</button>
					</Link>
				</div>
				<Image
					className="hidden xs:flex"
					src="/caution.png"
					alt="site under construction"
					height={500}
					width={500}
					priority
				/>
			</div>
		</div>
	);
}
