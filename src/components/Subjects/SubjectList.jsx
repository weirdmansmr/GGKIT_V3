import React from "react";
import SubjectItem from "./SubjectItem";

const SubjectList = () => {
	return (
		<div className="dark:bg-primary min-h-screen">
			<div className={`pt-4 px-3`}>
				<h1 className="text-[40px] lg:pl-10 self-start text-primary dark:text-secondary font-bold my-2">
					Предметы
				</h1>
				<div
					className={`
          pt-5
          lg:px-10
          grid
          justify-items-center
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-4
          `}
				>
					<SubjectItem />
					<SubjectItem />
					<SubjectItem />
					<SubjectItem />
					<SubjectItem />
					<SubjectItem />
				</div>
			</div>
		</div>
	);
};

export default SubjectList;
