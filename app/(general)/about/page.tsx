import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About Page', 'Gux', 'Información']
};
export default function AboutPage() {
  return (
    <span className="text-2xl text-red-600">About Page</span>
  )
}