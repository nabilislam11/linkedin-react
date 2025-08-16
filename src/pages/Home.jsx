import React from 'react'
import ProfilePart from '../component/container/profile/ProfilePart'
import Container from '../component/container/Container'
import MynetworkTitle from '../component/container/mynetwork/MynetworkTitle'
import TryPremiumTitle from '../component/container/trypremiumtitle/TryPremiumTitle'
import GroupsTitle from '../component/groupstitle/GroupsTitle'
import Addtoyourfeed from '../component/addtoyourfeed/Addtoyourfeed'
import PostPart from '../component/postpart/PostPart'
import NewsFeed from '../component/container/newsfeed/NewsFeed'

const Home = () => {
  return (
    <Container>
    <div className='flex h-screen gap-x-4  pt-[30px] '>

      {/* Profile__par */}
    <div className="w-[23%] flex flex-col  gap-y-3 ">
        <ProfilePart/>
      <MynetworkTitle/>
      <TryPremiumTitle/>
      <GroupsTitle/>
    </div>

      {/* news__feed */}
      <div className="w-[45%] flex flex-col gap-y-3  ">
        <PostPart/>
        <NewsFeed/>
      </div>
      {/* others__feed */}
      <div className="w-[28%] ">
        <Addtoyourfeed></Addtoyourfeed>
      </div>
    </div>
      </Container>
  )
}

export default Home