import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-3.png'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
const ref = useRef(null)

const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue, {duration: 3000,})
const isInView = useInView(ref,{once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value)
    }
} , [isInView,value,motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(1) <=value){
            ref.current.innerHTML = latest.toFixed(1)
        }
    })

},[springValue, value])

return <span ref={ref}></span>
};

const about = () => {
  return (
    <>
        <Head>
            <title>Michael | About Page</title>
            <meta name="description" content="Hi, I am Michael. I am a proficient full-stack developer who possesses expertise in a myriad of areas. Not only am I skilled in turning ideas into captivating web and mobile applications, but I also have hands-on experience in blockchain technology and smart contract development. In fact, I have successfully worked on a decentralized application (Dapp) by leveraging the power of blockchain. You can explore my latest projects and articles, which highlight my proficiency in frontend/backend skills, React.js, web development, and blockchain-based solutions."/>
        </Head>
        <TransitionEffect/>
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className='pt-16 mt-8'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-6">
                    <div className='col-span-3 flex flex-col items-start justify-start xl-col-span-4 lg:order-2 lg:col-span-8 md:items-center'>
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark-75 dark:text:light/75">Biography</h2>
                        <p className="my-4 font-medium">
                        Hi, I&apos;m Michael, I am a proficient full-stack developer who possesses expertise in a myriad of areas 
                        with a passion for coding, exploring new technology.
                        
                        </p>
                        
                        <p className="my-4 font-medium">
                        Not only am I skilled in turning ideas into captivating web and mobile applications using different frontend and backend framework with MySQL, MongoDB,
                        but I also have hands-on experience in blockchain technology and smart contract development. 
                        </p>

                        <p className="font-medium">
                        In fact, I have successfully worked on a decentralized application (Dapp) by leveraging the power of blockchain, solidity, Truffle. 
                        You can explore my latest projects and articles, which highlight my proficiency in frontend/backend skills, React.js, web development, and blockchain-based solutions.
                        </p>
                    </div>

                    <div className="col-span-3 relative h-max rounded-2xl border-2 border solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 lgd:order-1 lg:col-span-8">
                        <div className="absolute top-2 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light "/>
                        <Image src={profilePic} alt='Michael' className='w-full h-auto rounded-2xl' priority />
                    </div>

                    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:items-center xl:flex-row lg:order-3 lg:gap-3 md:gap-2 md:flex-col">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-5xl font-bold text-right lg:text-3xl md:text-2xl sm:text-xl xs:text-l lg:text-center">

                               A- Grade
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 text-right dark:text-light/75 xl:items-center md:text-lg sm:text-base lg:text-center">on my Decentralized identity <br/>System Polyu Capstone Project<br/>(Find in projects page)</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-5xl font-bold text-right lg:text-3xl md:text-2xl sm:text-xl xs:text-l xl:items-center lg:text-center">
                                <AnimatedNumbers value={1.3}/> Years
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg  sm:text-base lg:text-center"> of experience</h2>
                        </div>

                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-5xl font-bold text-right lg:text-3xl md:text-2xl sm:text-xl xs:text-l xl:items-center lg:text-center">
                            <AnimatedNumbers value={8}/>+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg  sm:text-base lg:text-center">Freelance Project</h2>
                        </div>

                        
                    </div>

                    
                    




                </div>
                <Skills/>
                <Experience/>
                <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about