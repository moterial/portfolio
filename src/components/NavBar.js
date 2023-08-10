import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from './Logo';
import {LinkedinIcon, GithubIcon} from './Icon';
import { motion } from "framer-motion"

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router.asPath)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[2px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duation-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}
const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
             <nav>
                 <CustomLink href="/" title="Home" className='mr-4'/>
                 <CustomLink href="/about" title="About" className='mr-4'/>
                 <CustomLink href="/projects" title="Projects" className='mr-4'/>
                 <CustomLink href="/articles"title="Articles" className='mr-4'/>
             </nav>
             
             <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="/" target={"_blank"}
                whileHover={{y:-4}}
                whileTap={{scale:0.9}}
                className="w-8 mx-3"
                >
                    <LinkedinIcon />
                </motion.a>

                <motion.a href="/" target={"_blank"}
                whileHover={{y:-4}}
                whileTap={{scale:0.9}}
                className="w-8 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                {/* <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link> */}
             </nav>
             
             <div
                className="absolute left-[50%] top-2 translate-x-[-50%]    "
             >
                <Logo/>
             </div>
        </header>
     
    )
}

export default NavBar