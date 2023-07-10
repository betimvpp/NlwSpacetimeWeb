import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'
import { Hero } from '@/Components/Hero';
import { Profile } from '@/Components/Profile';
import { SignIn } from '@/Components/SignIn';
import { Copyright } from '@/Components/Copyright';
import { cookies } from 'next/headers';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight:'700', variable: '--font-bai-jamjuree'  });

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.Js, TailwindCSS e TypeScript',
}

export default function RootLayout({children,}: {children: ReactNode}) {
  const isAuthenticated = cookies().has('token')
  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="bg-[url(../assets/bg-stars.svg)] bg-cover relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] rounded-full -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full"/>
            
            {/* stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>

            {isAuthenticated ? <Profile /> : <SignIn />}
            
            <Hero />

            <Copyright />
          </div>

          {/* right */}
          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
