import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
        <MotionLink href="/" 
        className="w-28 h-28 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{ 
            transition: { duration: 1, repeat: Infinity},
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        }}
        >
            Michael
        </MotionLink >
    </div>
  )
}

export default Logo