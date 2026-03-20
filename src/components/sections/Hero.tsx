"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ThreeBackground } from '@/components/ui/ThreeBackground'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      })
      
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20 px-6">
      <ThreeBackground />
      
      <div className="max-w-4xl w-full text-center z-10">
        <div className="overflow-hidden mb-6">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-8xl font-headline font-bold text-foreground leading-[1.1] tracking-tight"
          >
            A Fluidez do <br /> 
            <span className="text-primary italic">Movimento Consciente</span>
          </h1>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Um estúdio de pilates exclusivo onde a tecnologia encontra o bem-estar. 
          Redescubra seu corpo com precisão, força e elegância.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary text-white rounded-full px-10 h-14 text-lg">
            Começar Jornada
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg border-primary text-primary hover:bg-primary/5">
            Conhecer Espaço
          </Button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}