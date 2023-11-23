import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/Layouts/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogera',
  description: 'All about blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
