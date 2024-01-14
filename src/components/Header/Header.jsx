import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";

const Header = () => {
	const [sidebarState, setSidebarState] = useState(false);
	return (
		<div className="mt-16">
			<div className="flex w-screen fixed shadow-md dark:shadow-primaryLighter top-0 items-center px-8 justify-end bg-primary h-16">
				<button
					className="w-10 h-10 outline-none flex items-center justify-center text-2xl text-white font-black absolute left-5 rounded-full hover:border-white hover:text-white hover:border-2 transition"
					onClick={() => setSidebarState(true)}
				>
					<IoMenu />
				</button>
				<span className="font-mono text-3xl tracking-wider font-bold dark:text-primaryLighter">
					GGKIT
				</span>
				<Sidebar isOpen={sidebarState} setOpen={setSidebarState} />
			</div>
		</div>
	);
};

export default Header;
