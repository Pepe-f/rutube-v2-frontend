import { FC } from 'react'

import Catalog from '@/components/Catalog/Catalog'
import Layout from '@/components/Layout/Layout'

import { IVideo } from '@/types/video.interface'

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
  return (
    <Layout title='Тренды'>
      <Catalog newVideos={topVideos} />
    </Layout>
  )
}

export default Trending
