import React from 'react'
import { useScroll,motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({type, time, place,info,schoolType}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last-mb:0 w-[60%] mx-auto flex flex-col justify-between'>

        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:0}}
        whilteInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;
                <a className="text-primary capitalize dark:text-primaryDark break-words">@{schoolType}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className='font-medium w-full '>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
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
            Education
        </h2>
        
        <div  ref={ref} className="w-[75%] mx-auto relative">
            <motion.div 
            style={{
                scaleY: scrollYProgress
            }}
            className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                    type="F.6 Graduate (HKDSE) Diploma " 
                    time="2013.09 - 2019.09"
                    place="Carmel Secondary School"
                    schoolType="Secondary School"
                    info="Finished HKDSE with 4 core subjects and 2 electives subjects including Physics and ICT(Information and Communications Technology) . And all level 4 in the exam."
                />

                <Details
                    type="Bachelor Of Science In Computing"
                    time="2019.09 - 2023.07"
                    place="The Hong Kong Polytechnic University"
                    schoolType="University"
                    info="Completed my bachelor’s degree in computing, where I focused on developing my skills in software engineering in different aspects like Database, Web development, computer system security, machine learning, data mining and data warehousing, AI and etc."
                />

            
            </ul>
        </div>
    </div>
  )
}

export default Education