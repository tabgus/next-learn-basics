import type { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: 'Contactos Page',
  description: 'Esta es la pagina de mis contactos',
};

export default function ContactsPage() {
  return (
    <div className='text-blue-500 text-3xl'>ContactsPage</div>
  )
}
