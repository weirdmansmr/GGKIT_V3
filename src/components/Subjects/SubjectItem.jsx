import React from "react";
import image from "@/assets/CS.avif";

const SubjectItem = () => {
	return (
		<div className="rounded-2xl relative w-80 overflow-hidden hover:-translate-y-3 duration-150">
			<img src={image} className="" alt="aaa" />
			<div className="p-6 border-2 border-t-0 border-primary dark:border-primaryLighter rounded-b-2xl">
				<div className="flex justify-between items-center dark:text-white text-sm">
					<span className="">
						Количество уроков:
						<span className="text-primaryLighter"> 20</span>
					</span>
					<span className=" bg-primaryLighter dark:bg-primaryLightTr px-4 rounded-3xl">
						IT
					</span>
				</div>
				<h2 className="text-secondary text-2xl py-4 font-semibold">
					Информатика
				</h2>
				<div className="flex justify-end">
					<a
						href="#"
						className={`
                  bg-primary
                  dark:bg-primaryLightTr
                  hover:bg-transparent
                  dark:hover:bg-transparent
                  border-2
                  duration-150
                  border-secondary
                  px-3
                  py-0.5
                  rounded-3xl
                  text-white
                  hover:text-primary
                  dark:hover:text-white
                  `}
					>
						Перейти
					</a>
				</div>
			</div>
		</div>
	);
};

export default SubjectItem;
