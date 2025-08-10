import React from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { SessionProvider } from 'next-auth/react'

export const metadata ={
    title:"Promptopia",
    description:"Discover & Share AI Prompts",
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
            <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default Rootlayout