import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar,Footer } from '@/components'
import Provider from '@/redux/provider'
import { Setup } from '@/components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Auth',
  description: 'Full Auth app using django and next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Navbar/>
          <Setup/>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>{children}</div>
        <Footer/>
        </Provider>
        </body>
    </html>
  )
}
