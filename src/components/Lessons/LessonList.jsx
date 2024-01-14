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
		<div className="dark:bg-primary min-h-screen">
			<div className={`pt-4 px-3`}>
				<h1 className="text-[40px] lg:pl-10 self-start text-primary dark:text-secondary font-bold my-2">
					Список уроков
				</h1>
				<div className="pt-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
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
			</div>
		</div>
	);
};

export default LessonList;
