import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark 
        text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm xs:text-xs md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        " 
        whileHover={{scale: 1.1, transition: {duration: 0.25}}}
        initial={{x: 0, y: 0}}

        transition={{duration: 1.5}}
        whileInView = {{x: x, y: y}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg dark:lg:bg-circularDarkLg
    md:bg-circularLightMd dark:md:bg-circularDarkMd
    sm:bg-circularLightSm dark:sm:bg-circularDarkSm
    ">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shaow-dark cursor-pointer
        dark:text-dark dark:bg-light
        lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
        whileHover={{scale: 1.1}}
        >
         web
         </motion.div>
         <Skill name="HTML" x="-15vw" y="2vw"/>
         <Skill name="CSS" x="-5w" y="-10vw"/>
        <Skill name="React" x="20vw" y="-15vw"/>
        <Skill name="Node" x="20vw" y="0vw"/>
        <Skill name="Express" x="5vw" y="10vw"/>
        <Skill name="MongoDB" x="-8vw" y="25vw"/>
        <Skill name="SQL" x="-20vw" y="15vw"/>
        <Skill name="Nextjs" x="-23vw" y="-18vw"/>
        <Skill name="Solidity" x="-15vw" y="-8vw"/>
        <Skill name="Web3" x="0vw" y="-26vw"/>
        <Skill name="Truffle" x="32vw" y="-25vw"/>
        <Skill name="Ganache" x="35vw" y="-2vw"/>
        <Skill name="Hardhat" x="30vw" y="13vw"/>
        <Skill name="Nestjs" x="15vw" y="27vw"/>
        <Skill name="JavaSript" x="-5vw" y="35vw"/>
        <Skill name="frontend" x="-36vw" y="12vw"/>
        <Skill name="backend" x="-35vw" y="-5vw"/>


        

    </div>
    </>
  )
}

export default Skills