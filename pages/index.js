import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "@/components/Button"

import cat from "../public/content/cat.png"

import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import { FaDiscord, FaTelegram } from "react-icons/fa"

export default function Home() {
	const [discordButtonText, setDiscordButtonText] = useState('Discord')

	const copyDiscord = () => {
		navigator.clipboard.writeText('myst#3556')
		setDiscordButtonText('Copied!')
		setTimeout(() => { setDiscordButtonText('Discord') }, 3000)
	}

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<title>myst</title>
			</Head>
			<main className="flex flex-col gap-7 items-center justify-center w-screen h-screen">
				<div className="flex gap-3 items-center">
					<Image src={cat} width="100" alt="Cat" className="unselectable" />
					<span className="logo-font text-[65px] text-white unselectable">myst</span>
				</div>
				<div className="flex flex-wrap gap-3 justify-center">
					<a href="https://github.com/MisterKirill"><Button text="GitHub" bg="white" Icon={AiFillGithub} /></a>
					<a href="https://youtube.com/@truemyst"><Button text="YouTube" bg="#FF0000" fg="white" Icon={AiFillYoutube} /></a>
					<a href="https://t.me/misterkirill1"><Button text="Telegram" bg="#2AABEE" fg="white" Icon={FaTelegram} /></a>
					<div id="discord-copy"><a onClick={copyDiscord}><Button text={discordButtonText} bg="#5865F2" fg="white" Icon={FaDiscord} /></a></div>
				</div>
			</main>
		</>
	)
}