import React from 'react'
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Precios',
  description: 'Éstaa pagina de precios de mis servicios',
};

export default function PricingPage() {
  return (
    <div className='text-gray-800 text-3xl'>Precios</div>
  )
}
