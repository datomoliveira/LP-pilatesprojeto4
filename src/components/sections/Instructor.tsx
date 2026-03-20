"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'

export const Instructor = () => {
  const imgData = PlaceHolderImages.find(img => img.id === 'instructor')

  return (
    <section id="instrutora" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden"
          >
            {imgData && (
              <Image 
                src={imgData.imageUrl}
                alt="Instrutora Principal"
                fill
                className="object-cover"
                data-ai-hint={imgData.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl font-headline font-bold text-white mb-1">Marina Silveira</h3>
              <p className="text-white/80 font-medium">Fundadora & Master Pilates Coach</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 text-primary border-none mb-6 px-4 py-1 text-sm rounded-full">Autoridade no Movimento</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8">
              A Expertise por trás de cada movimento.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com mais de 15 anos de experiência internacional, Marina Silveira fundou o Syncro Flow com a visão de que o Pilates deve ser uma experiência terapêutica e transformadora.
              </p>
              <p>
                Especializada em biomecânica e reabilitação, Marina utiliza uma abordagem personalizada que une os princípios clássicos de Joseph Pilates com as mais modernas descobertas da ciência do movimento.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-primary text-3xl font-headline font-bold mb-1">+1.5k</h4>
                  <p className="text-sm font-medium uppercase tracking-wider">Alunos Atendidos</p>
                </div>
                <div>
                  <h4 className="text-primary text-3xl font-headline font-bold mb-1">15 anos</h4>
                  <p className="text-sm font-medium uppercase tracking-wider">De Experiência</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}