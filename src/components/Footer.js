import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()}  &copy; All Right Reserved.</span>
            <div className="flex items-center">
            Build With <span className="text-primary text-2xl px-1"> &#9825;</span> by&nbsp;<Link href='/' className="underline">Michael Yeung</Link>
            </div>
            
            <Link href='/'>Passion in Coding </Link>
        </Layout>
    </footer>
  )
}

export default Footer