'use client'

import { sendGAEvent } from '@next/third-parties/google'
import React from 'react'

interface TrackedDocumentLinkProps {
  href: string
  children: React.ReactNode
  documentName: string
  className?: string
}

export function TrackedDocumentLink({ href, children, documentName, className }: TrackedDocumentLinkProps) {
  const handleClick = () => {
    sendGAEvent({ 
      event: 'document_click', 
      document_name: documentName,
    })
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
