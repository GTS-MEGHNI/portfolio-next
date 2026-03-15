'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

const animVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={animVariants}
    >
      {children}
    </motion.div>
  )
}
