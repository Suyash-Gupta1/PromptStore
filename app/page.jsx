import React from 'react'
import Feed from '@components/Feed'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center"> AI Prompts</span>
        </h1>
        <p className="desc text-center">Promptopia is an open source platform to share the prompts for others which you find best. </p>

        {/* feed */}
        <Feed />

    </section>
  )
}

export default Home
