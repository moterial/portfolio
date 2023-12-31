import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full font-medium dark:text-light dark:border-light sm:text-base ">
        <Layout className='py-8 border-t-2 border-solid border-dark flex items-center justify-between dark:text-light dark:border-light lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()}  &copy; All Right Reserved.</span>
            <div className="flex items-center lg:py-2 ">
            Build With <span className="text-primary text-2xl px-1 dark:text-primaryDark"> &#9825;</span> by&nbsp;<Link href='/' className="underline">Michael Yeung</Link>
            </div>
            
            <Link href='/'>Passion in Coding </Link>
        </Layout>
    </footer>
  )
}

export default Footer