import React from 'react'
import ProfilePart from '../component/container/profile/ProfilePart'
import Container from '../component/container/Container'

const Home = () => {
  return (
    <Container>
    <div className='flex h-screen  '>

      {/* Profile__par */}
      <ProfilePart>

      </ProfilePart>
      {/* news__feed */}
      <div className="w-[45%] "></div>
      {/* others__feed */}
      <div className="w-[30%] "></div>
    </div>
      </Container>
  )
}

export default Home