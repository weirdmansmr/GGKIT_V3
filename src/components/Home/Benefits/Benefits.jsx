import React from "react";
import { VscGraphLine } from "react-icons/vsc";

const Benefits = () => {
	return (
		<section className=" dark:bg-primary px-2 py-4 flex flex-col gap-4 justify-center items-center border-t border-secondary">
			<h2 className="text-xl text-center text-[#512DA8] dark:text-primaryLighter font-semibold">
				Преимущества обучения в нашей системе
			</h2>
			<div className="grid justify-center justify-items-center max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className=" w-80 h-80 flex justify-center flex-col items-center border-2 border-primaryLighter rounded-xl p-4">
					<VscGraphLine className="fill-[#512DA8] dark:fill-secondary w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-white">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
				<div className="w-80 h-80 flex justify-center flex-col items-center border-2 border-primaryLighter rounded-xl p-4">
					<VscGraphLine className="fill-[#512DA8] dark:fill-secondary w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-white">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
				<div className="w-80 h-80 flex justify-center flex-col items-center border-2 border-primaryLighter rounded-xl p-4">
					<VscGraphLine className="fill-[#512DA8] dark:fill-secondary w-14 h-14" />
					<p className="text-center text-[#512DA8] dark:text-white">
						Быстрое развитие и улучшение навыков в необходимой сфере
					</p>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
