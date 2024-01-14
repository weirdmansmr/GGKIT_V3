import React from "react";

const LessonItem = ({ id, name, desc, date }) => {
	return (
		<div
			className={`border-gradient dark:border-gradient-dark flex flex-col gap-2 border-2 rounded-md border-primaryLighter p-4 shadow-inner shadow-secondary`}
		>
			<div
				className={`flex items-end justify-between text-violet-800 dark:text-primaryLighter`}
			>
				<h2 className="text-2xl font-semibold">{name}</h2>
				<h3 className="text-xl text-nowrap">Урок {id + 1}</h3>
			</div>
			<p className="text-justify dark:text-white">{desc}</p>
			<p className="text-end text-green-600 dark:text-green-500">Открыто</p>
		</div>
	);
};

export default LessonItem;
