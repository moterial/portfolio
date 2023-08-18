import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icon'
import project1 from '../../public/images/projects/fyp-cover-image.png'


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
            <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
            dark:bg-dark dark:border-light dark:text-light
            '>
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light "/>
                <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto' priority={true} />
                </Link>


                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                    <Link href={link} target='_blank' className=''>
                        <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                    <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon/> </Link>
                    <Link href={link} target='_blank'
                    className="ml-4 rounded-lg bg-dark text-light p-2 border border-solid border-transperant px-6 text-lg font-semibold  hover:border-dark hover:bg-light hover:text-dark   dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
                    >Visit Project </Link>

                    </div>
                </div>
            </article>

    )
}

const Project = ({type, title, img, link, github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:text-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light "/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <Image src={img} alt={title} className='w-full h-auto' priority={true}/>
                </Link>  


                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                    <Link href={link} target='_blank' className=''>
                        <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                    
                    <Link href={link} target='_blank'
                    className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  hover:border-dark hover:bg-light hover:text-dark   dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
                    >Visit Project </Link>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon/> </Link>
                    </div>
                </div>
        </article>
    )
}



const projects = () => {
  return (
    <>

        <Head>
            <title>Michael | Projects Page</title>
            <meta name="description" content="Projects"/>
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className=' mt-8'>
                <AnimatedText text="My Projects" className='mb-16'/>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Blockchain-Empowered Social Decentrialized Identity"
                        img={project1}
                        summary = "A DID system integrated with a social media Dapp by leveraging the transparent nature of the blockchain to reduce the extent to which other parties have control over our identities and personal data."
                        link = '/'
                        type="Featured Project"
                        github=''
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title="Blockchain-Empowered Social Decentrialized Identity"
                            img={project1}
                            link = '/'
                            type="Project 1"
                            github=''
                            />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title="Blockchain-Empowered Social Decentrialized Identity"
                            img={project1}
                            link = '/'
                            type="Project 2"
                            github=''
                            />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Blockchain-Empowered Social Decentrialized Identity"
                        img={project1}
                        summary = "A DID system integrated with a social media Dapp by leveraging the transparent nature of the blockchain to reduce the extent to which other parties have control over our identities and personal data."
                        link = '/'
                        type="Featured Project"
                        github=''
                        />
                    </div>

                    

                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects