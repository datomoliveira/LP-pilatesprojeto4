"use client"

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const GalleryItem = ({ id, index }: { id: string, index: number }) => {
  const imgData = PlaceHolderImages.find(img => img.id === id)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100])

  if (!imgData) return null

  return (
    <div className="relative overflow-hidden rounded-3xl group aspect-[4/5]">
      <motion.div style={{ y }} className="w-full h-full relative">
        <Image 
          src={imgData.imageUrl}
          alt={imgData.description}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint={imgData.imageHint}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm font-medium uppercase tracking-widest mb-1">Destaque</p>
          <h4 className="text-xl font-headline font-bold">{imgData.description}</h4>
        </div>
      </motion.div>
    </div>
  )
}

export const Gallery = () => {
  return (
    <section id="espaco" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Infraestrutura de Elite para sua Evolução
            </h2>
            <p className="text-muted-foreground text-lg">
              Ambiente planejado para o máximo conforto e foco. Utilizamos equipamentos Gratz e Balanced Body de última geração.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-border mx-12 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GalleryItem id="reformer" index={0} />
          <div className="md:translate-y-20">
            <GalleryItem id="cadillac" index={1} />
          </div>
          <GalleryItem id="studio-space" index={2} />
        </div>
      </div>
    </section>
  )
}