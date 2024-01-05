import React from "react";
import { VscGraphLine } from "react-icons/vsc";

const Benefits = () => {
	return (
		<section className=" dark:bg-[#673AB7] px-2 py-4 flex flex-col gap-4 justify-center items-center border-t border-yellow-500">
			<h2 className="text-xl text-center text-[#512DA8] dark:text-yellow-500 font-semibold">
				Преимущества обучения в нашей системе
			</h2>
			<div className="grid justify-center justify-items-center max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className=" w-80 h-80 flex justify-center flex-col items-center border-gradient dark:border-gradient-dark">
					<VscGraphLine className="fill-[#512DA8] dark:fill-yellow-500 w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-yellow-500">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
				<div className="w-80 h-80 flex justify-center flex-col items-center border-gradient dark:border-gradient-dark">
					<VscGraphLine className="fill-[#512DA8] dark:fill-yellow-500 w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-yellow-500">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
				<div className="md:col-start-1 md:col-end-3 lg:col-span-1 w-80 h-80 flex justify-center flex-col items-center border-gradient dark:border-gradient-dark">
					<VscGraphLine className="fill-[#512DA8] dark:fill-yellow-500 w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-yellow-500">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
