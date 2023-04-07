import './globals.css'
import "../public/extlib/fluent/FluentSystemIcons-Resizable.css"

// import Header from './header'
// import Footer from './footer'
import Aside from "@/components/Aside/Main";
import Container from "@/components/Main/Container";
import SideBtn from "@/components/Aside/SideBtn";
import SideLink from "@/components/Aside/SideLink";

import Notes from './notes'

export const metadata = {
  title: 'NotePad',
  description: 'Keep and share your thought with friends and family',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100 md:bg-gray-200 text-gray-800'>
        <section className="w-full h-screen flex items-center justify-center">
          <Aside>
            <Notes/>
          </Aside>
          <main className="w-full md:w-9/12 h-full md:pr-1.5 md:py-2">
            <div className='flex h-full w-full relative'>
              {children}
            </div>
          </main>
        </section>
      </body>
    </html>
  )
}
