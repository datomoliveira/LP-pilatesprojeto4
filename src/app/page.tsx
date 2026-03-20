"use client"

import React, { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { Gallery } from '@/components/sections/Gallery'
import { Instructor } from '@/components/sections/Instructor'
import { Location } from '@/components/sections/Location'
import { Footer } from '@/components/layout/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Method />
          <Gallery />
          <Instructor />
          <Location />
          <Footer />
        </div>
      </div>
    </main>
  )
}