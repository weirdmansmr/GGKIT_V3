import React from "react";
import LessonItem from "./LessonItem";

const LessonList = () => {
	const lessonArray = [
		{
			id: 0,
			name: "Переменные в JavaScript",
			desc: "В этом уроке мы разберём все способы создания переменных: let, const и var",
			date: "10-01-2024",
		},
		{
			id: 1,
			name: "Типы данных в JavaScript",
			desc: "В этом уроке мы разберём все способы создания переменных: let, const и var",
			date: "10-01-2024",
		},
		{
			id: 2,
			name: "Циклы в JavaScript",
			desc: "В этом уроке мы разберём все способы создания переменных: let, const и var",
			date: "10-01-2024",
		},
	];
	return (
		<div
			className={`dark:bg-violet-700 flex flex-col pt-4 px-3 gap-2 min-h-screen`}
		>
			<h1 className=" self-start text-3xl text-violet-700 dark:text-yellow-400 font-bold my-2">
				Список уроков
			</h1>
			{lessonArray.map((el) => (
				<LessonItem
					key={el.id}
					id={el.id}
					name={el.name}
					desc={el.desc}
					date={el.date}
				/>
			))}
		</div>
	);
};

export default LessonList;
