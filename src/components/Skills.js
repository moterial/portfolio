import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light" 
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
    <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shaow-dark cursor-pointer dark:text-dark dark:bg-light"
        whileHover={{scale: 1.1, transition: {duration: 0.25}}}
        >
         web
         </motion.div>
         <Skill name="HTML" x="-20vw" y="2vw"/>
         <Skill name="CSS" x="-5w" y="-10vw"/>
        <Skill name="React" x="20vw" y="2vw"/>
        <Skill name="Node" x="20vw" y="10vw"/>
        <Skill name="Express" x="5vw" y="10vw"/>
        <Skill name="MongoDB" x="-5vw" y="10vw"/>
        <Skill name="SQL" x="-20vw" y="10vw"/>
        <Skill name="Nextjs" x="-20vw" y="-2vw"/>
        <Skill name="Solidity" x="-10vw" y="-10vw"/>
        <Skill name="Web3" x="0vw" y="-10vw"/>
        <Skill name="Truffle" x="10vw" y="-10vw"/>
        <Skill name="Ganache" x="20vw" y="-2vw"/>
        <Skill name="Hardhat" x="20vw" y="10vw"/>
        <Skill name="Nestjs" x="5vw" y="10vw"/>
        <Skill name="JavaSript" x="-5vw" y="10vw"/>
        <Skill name="frontend" x="-30vw" y="12vw"/>
        <Skill name="backend" x="-30vw" y="-5vw"/>


        

    </div>
    </>
  )
}

export default Skills