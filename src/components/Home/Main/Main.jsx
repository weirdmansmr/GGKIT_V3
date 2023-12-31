import React from "react";
import mainImg from "@/assets/Main2.png";

const Main = () => {
	return (
		<main className="px-2 py-3 gap-2 flex text-violet-700 flex-col dark:bg-violet-700 items-center">
			<h1 className="gradient bg-clip-text text-transparent font-extrabold font-mono text-4xl text-center">
				Центр дополнительного образования
			</h1>
			<h3 className="gradient bg-clip-text font-semibold text-transparent text-xl text-center">
				Помощь ученику в получении необходимых знаний в сфере IT и информатики
			</h3>
			<div className="">
				<img src={mainImg} className="rounded-xl " alt="" />
			</div>
		</main>
	);
};

export default Main;
