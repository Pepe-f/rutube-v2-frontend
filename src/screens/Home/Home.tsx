import { FC } from 'react'

import Catalog from '@/components/Catalog/Catalog'
import Discover from '@/components/Discover/Discover'
import Layout from '@/components/Layout/Layout'

import { IVideo } from '@/types/video.interface'

interface HomeProps {
  randomVideo: IVideo
  topVideo: IVideo
  newVideos: IVideo[]
}

const Home: FC = () => {
  return (
    <Layout title='Rutube v2 | Главная'>
      <Discover />
      <Catalog />
    </Layout>
  )
}

export default Home
