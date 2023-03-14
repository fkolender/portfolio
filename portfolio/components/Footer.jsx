import Link from "next/link"

const Footer = () => {
  return (
    
    <footer>
      <div className="flex justify-center space-x-2 pb-2">
      <p>Check my GitHub</p>
      <a href='https://github.com/fkolender/'><img src="github.svg" height={32} width={32}></img></a>
      <a href='https://www.linkedin.com/in/francisco-kolender-200a41234/'><img src="linkedin.svg" height={32} width={32}></img></a>
      </div>

        © Copyright 2023 Francisco Kolender
    </footer>
  )
}

export default Footer