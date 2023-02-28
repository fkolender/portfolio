import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'
import { Dropdown } from "flowbite-react";
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';

export default function Home() {
  return (
  <>
    <div>
      <p className='title font-bold text-gray-600'>Sharing my code journey with the web.</p>
      <p className='text text-center pb-3'>Welcome and thank you for taking the time to look around. This site is a showcase of my skills, projects, and journey as a developer. Here, you'll find my contact information, resume & display of my projects - currently in progress.</p>
      
      <div className='center-dropdown'>
      <Dropdown label="Open">
        <Dropdown.Item>
        <Link href='/about'>About Me</Link>
        </Dropdown.Item>

        <Dropdown.Item>
        <Link href='/projects'>Projects</Link>
        </Dropdown.Item>
      </Dropdown>
      </div>
    </div>
  </>
  )
}
