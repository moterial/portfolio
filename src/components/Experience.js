import React from 'react'
import { useScroll,motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last-mb:0 w-[60%] mx-auto flex flex-col  justify-between'>

        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:0}}
        whilteInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a className="text-primary capitalize dark:text-primaryDark" target="_blank" href={companyLink }>@{company}</a>    </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-32 xs:text-4xl">
            Experience
        </h2>
        
        <div  ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div 
            style={{
                scaleY: scrollYProgress
            }}
            className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    position="Freelance Web Developer"
                    company="FromDB" 
                    companyLink="https://www.fromdb.com/index.html"
                    time="2022.02 - Present"
                    address="Remote/ Ngau Tau Kok, HK"
                    work="Vender Company: Developed different web and mobile application for clients using React or PHP, Node.js, Express.js, MongoDB, and Mysql. And working with different programmers and designers to build the application."
                />

                <Details
                    position="Programmer"
                    company="St Teresa's Hospital"
                    companyLink="https://www.sth.org.hk/index.asp?lang_code=en"
                    time="2023.07 - Present"
                    address="Prince Edward Road West, HK"
                    work="Hospital: Engage as a Full Stack Developer on Microsoft .NET, MS SQL Server, moreover, Angular, Node.js, Android, ReactNative and other programming framework.
                    Communicate with business users in gathering requirement and analyse business needs to meet hospital workflow. Involve in system development life cycle like system analysis and design, integration test, user acceptance test and user documentation to fit in a large-scale enterprise environment"
                />

            
            </ul>
        </div>
    </div>
  )
}

export default Experience