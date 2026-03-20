"use client"

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Particles
    const particlesCount = 2000
    const positions = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x5D7F4C,
      transparent: true,
      opacity: 0.4,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Flowing organic shape
    const sphereGeom = new THREE.SphereGeometry(1, 64, 64)
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x5D7F4C,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const sphere = new THREE.Mesh(sphereGeom, sphereMat)
    scene.add(sphere)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      
      points.rotation.y += 0.001
      points.rotation.x += 0.0005
      
      sphere.rotation.y += 0.002
      sphere.scale.set(
        1 + Math.sin(Date.now() * 0.001) * 0.1,
        1 + Math.cos(Date.now() * 0.0015) * 0.1,
        1 + Math.sin(Date.now() * 0.002) * 0.1
      )

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none" />
}