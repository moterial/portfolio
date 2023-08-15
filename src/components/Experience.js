import React from 'react'


const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <div >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a className="text-primary capitalize" target="_blank" href={companyLink }>@{company}</a>    </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Experience
        </h2>
        
        <div className="w-[75%] mx-auto relative">
            <ul>
                <Details
                    position="Freelance Full Stack Web Developer"
                    company="FromDB"
                    companyLink="https://www.fromdb.com/index.html"
                    time="2022.02 - Present"
                    address="Remote/ Ngau Tau Kok, HK"
                    work="Developed different web and mobile application for clients using React or PHP, Node.js, Express.js, MongoDB, and Mysql. And working with different programmers and designers to build the application."
                />

                <Details
                    position="Programmer"
                    company="St Teresa's Hospital"
                    companyLink="https://www.sth.org.hk/index.asp?lang_code=en"
                    time="2023.07 - Present"
                    address="Prince Edward Road West, HK"
                    work="Developed different web and mobile application for clients using React or PHP, Node.js, Express.js, MongoDB, and Mysql. And working with different programmers and designers to build the application."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience