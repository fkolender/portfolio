import { Flowbite } from "flowbite-react"
import { Button } from 'flowbite-react'
import Link from "next/link"


import React from 'react'

const about = () => {
	return (
		<div className='container'>
			<h1 className='title font-bold text-gray-600'>About Me</h1>
			<p className='text text-center pb-5'>My name is Francisco Kolender, I'm a 20 year old IT Analyst student from Montevideo, Uruguay. Feel free to reach out to me if you have any questions or would like to discuss potential projects.</p>
			
			<div className="flex flex-col items-center">
				<Button>
					<Link className="text-white" href='https://drive.google.com/file/d/107cRq_yjpokDL9APxbGLG_51QdXcb9IA/view?usp=sharing'>My Resume</Link>
				</Button>
			</div>
		</div>
	)
}

export default about