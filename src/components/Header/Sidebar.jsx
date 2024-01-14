import React from "react";

const Sidebar = ({ isOpen, setOpen }) => {
	let sideOpen = isOpen ? "" : "-translate-x-80";
	return (
		<aside
			className={`h-screen w-80 py-16 px-10 transition duration-300 bg-primary fixed top-0 left-0 ${sideOpen}`}
		>
			<button
				className="w-10 h-10 outline-none text-white font-black absolute right-3 top-3 rounded-full border-secondary hover:text-secondary border-2 transition"
				onClick={() => setOpen(false)}
			>
				X
			</button>
			<nav className="flex flex-col text-xl gap-3 text-white">
				<a href="">Menu</a>
				<a href="">Menu</a>
				<a href="">Menu</a>
				<a href="">Menu</a>
			</nav>
		</aside>
	);
};

export default Sidebar;
