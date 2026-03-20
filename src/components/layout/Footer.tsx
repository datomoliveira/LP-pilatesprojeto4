"use client"

import React from 'react'
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-headline font-bold text-primary mb-6 tracking-tighter">SYNCRO FLOW</h2>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
              Proporcionando uma jornada de autoconhecimento e força através do Pilates de Luxo em São Paulo. Onde cada movimento conta.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#metodo" className="hover:text-primary transition-colors">O Método</a></li>
              <li><a href="#espaco" className="hover:text-primary transition-colors">Aparelhos</a></li>
              <li><a href="#instrutora" className="hover:text-primary transition-colors">A Instrutora</a></li>
              <li><a href="#localizacao" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2024 Syncro Flow Studio. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}