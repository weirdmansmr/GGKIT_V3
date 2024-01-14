import React from "react";
import mainImg from "@/assets/Main2.png";

const Main = () => {
	return (
		<main className="px-2 pb-3 pt-8 gap-2 flex dark:text-secondary flex-col dark:bg-primary items-center">
			<h1 className="font-extrabold font-mono text-4xl text-center">
				Центр дополнительного образования
			</h1>
			<h3 className="font-semibold text-xl text-center dark:text-primaryLighter">
				Помощь ученику в получении необходимых знаний в сфере IT и информатики
			</h3>
			<div className="">
				<img src={mainImg} className="rounded-xl " alt="" />
			</div>
		</main>
	);
};

export default Main;
