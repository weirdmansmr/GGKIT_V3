import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { IoMenu } from "react-icons/io5";

const Header = () => {
	const [sidebarState, setSidebarState] = useState(false);
	return (
		<div className="mt-16">
			<div className="flex w-screen fixed shadow-xl top-0 items-center px-8 justify-end bg-[#512DA8] h-16">
				<button
					className="w-10 h-10 outline-none flex items-center justify-center text-2xl text-[#FF5252] font-black absolute left-5 bg-[#FFFFFF] rounded-full border-[#FF5252] hover:bg-[#512DA8] hover:text-[#FFFFFF] hover:border-[#FF5252] border-2 transition"
					onClick={() => setSidebarState(true)}
				>
					<IoMenu />
				</button>
				<span className="font-mono text-3xl tracking-wider font-bold text-yellow-500">
					GGKIT
				</span>
				<Sidebar isOpen={sidebarState} setOpen={setSidebarState} />
			</div>
		</div>
	);
};

export default Header;
