import { FC } from 'react'

import Catalog from '@/components/Catalog/Catalog'
import Discover from '@/components/Discover/Discover'
import Layout from '@/components/Layout/Layout'

import { IVideo } from '@/types/video.interface'

export interface HomeProps {
  randomVideo: IVideo
  topVideo: IVideo
  newVideos: IVideo[]
}

const Home: FC<HomeProps> = ({ newVideos, randomVideo, topVideo }) => {
  return (
    <Layout title='Rutube v2 | Главная'>
      <Discover topVideo={topVideo} randomVideo={randomVideo} />
      <Catalog newVideos={newVideos} />
    </Layout>
  )
}

export default Home
