import React from "react";
import loginBg from "@/assets/Login-bg.jpeg";

const Login = () => {
	const error = false;
	return (
		<div className={`
		lg:flex
		`}>
			<img
				className={`
				hidden
				lg:block
				h-screen
				`}
				src={loginBg}
				alt=""
			/>
			<div className="w-screen h-screen lg:flex lg:items-center lg:justify-center bg-gradient-to-tr from-yellow-400 to-violet-900">
				<form
					action="#"
					method="get"
					className={`
				absolute
				lg:static
				top-1/2
				left-1/2
				-translate-x-1/2
				-translate-y-1/2
				lg:translate-x-0
				lg:translate-y-0
				border-gradient
				w-11/12
				max-w-md
				h-66
				xl:h-80
				xl:max-w-lg
				rounded-xl
				flex
				flex-col
				justify-center
				px-4
				text-md
				gap-2
				xl:gap-4
				text-violet-900
				lg:flex
				lg:justify-center
				`}
				>
					<h1 className="text-center text-3xl xl:text-4xl my-4">Авторизация</h1>
					<div className="flex flex-col mb-2">
						<input
							placeholder="Имя пользователя"
							type="text"
							name="username"
							id="username"
							className={`
						bg-violet-800
						h-10
						rounded-lg
						outline-none
						pl-2
						text-xl
						text-yellow-400
						focus:outline-yellow-400
						border-2
						placeholder:text-yellow-600
						${error ? "border-red-500" : "border-transparent"}
      `}
						/>
						<label htmlFor="username" className={error ? "text-red-500" : ""}>
							{error ? "Неверное имя пользователя" : ""}
						</label>
					</div>
					<div className="flex flex-col">
						<input
							placeholder="Пароль"
							type="password"
							name="password"
							id="password"
							className={`
						bg-violet-800
						h-10
						rounded-lg
						outline-none
						pl-2
						text-xl
						text-yellow-400
						focus:outline-yellow-400
						border-2
						placeholder:text-yellow-600
						${error ? "border-red-500" : "border-transparent"}
      `}
						/>{" "}
						<label htmlFor="password" className={error ? "text-red-500" : ""}>
							{error ? "Неверный пароль" : ""}
						</label>
					</div>
					<input
						type="button"
						value="Войти"
						className="border-2 self-center my-4 px-5 py-1 xl:text-lg xl:px-8 xl:py-2 rounded border-yellow-400 duration-150 active:border-transparent active:bg-yellow-400 active:border-violet-800"
					/>
				</form>
			</div>
		</div>
	);
};

export default Login;
