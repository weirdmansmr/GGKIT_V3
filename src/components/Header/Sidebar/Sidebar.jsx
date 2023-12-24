import React from "react";

const Sidebar = ({ isOpen, setOpen }) => {
	let sideOpen = isOpen ? "" : "-translate-x-80";
	return (
		<aside
			className={`h-screen w-80 py-16 px-10 transition duration-300 bg-[#512DA8] fixed top-0 left-0 ${sideOpen}`}
		>
			<button
				className="w-10 h-10 outline-none text-[#FF5252] font-black absolute right-3 top-3 bg-[#FFFFFF] rounded-full border-[#FF5252] hover:bg-[#512DA8] hover:text-[#FFFFFF] hover:border-[#FF5252] border-2 transition"
				onClick={() => setOpen(false)}
			>
				X
			</button>
			<nav className="flex flex-col text-xl gap-3 text-[#FFFFFF]">
				<a href="">Menu</a>
				<a href="">Menu</a>
				<a href="">Menu</a>
				<a href="">Menu</a>
			</nav>
		</aside>
	);
};

export default Sidebar;
