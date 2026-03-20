"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const Location = () => {
  return (
    <section id="localizacao" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
              Onde nos <br /> <span className="text-primary italic">Encontrar</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Av. das Nações Unidas, 12901 - Brooklin<br />São Paulo - SP, 04578-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 06:00 – 21:00<br />Sábado: 08:00 – 14:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contato</h4>
                  <p className="text-muted-foreground">(11) 98877-6655<br />contato@syncroflow.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-border"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center flex-col p-10 text-center">
              <MapPin size={48} className="text-primary/40 mb-4" />
              <h4 className="text-xl font-headline font-bold mb-2">Google Maps Interativo</h4>
              <p className="text-muted-foreground mb-6">Localizado no coração do Brooklin, com fácil acesso e estacionamento privativo.</p>
              <div className="w-full h-48 bg-border/40 rounded-xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}