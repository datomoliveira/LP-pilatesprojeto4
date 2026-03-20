"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Wind, Target, Activity, Heart } from 'lucide-react'

const pillars = [
  {
    title: "Precisão",
    desc: "Cada movimento é executado com controle milimétrico para resultados máximos.",
    icon: Target
  },
  {
    title: "Fluidez",
    desc: "A transição suave entre exercícios cria uma experiência de dança e força.",
    icon: Wind
  },
  {
    title: "Respiração",
    desc: "O combustível do seu corpo coordenado com a técnica exclusiva Syncro.",
    icon: Heart
  },
  {
    title: "Equilíbrio",
    desc: "A harmonia perfeita entre mente e corpo para uma vida equilibrada.",
    icon: Activity
  }
]

export const Method = () => {
  return (
    <section id="metodo" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4"
          >
            O Método Syncro Flow
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-background rounded-2xl border border-border/50 shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}