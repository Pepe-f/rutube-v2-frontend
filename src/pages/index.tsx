import shuffle from 'lodash/shuffle'
import { GetStaticProps, NextPage } from 'next'


import Home, { HomeProps } from '@/screens/Home/Home'

import { VideoService } from '@/services/video.service'

import { IVideo } from '@/types/video.interface'

const HomePage: NextPage<HomeProps> = (props) => {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideoService.getAll()
    const { data: topVideos } = await VideoService.getMostPopular()

    return {
      props: {
        newVideos,
        topVideo: topVideos[0],
        randomVideo:
          shuffle(newVideos.filter(video => video.id !== topVideos[0].id))[0] ||
          ({} as IVideo)
      } as HomeProps
    }
  } catch (e) {
    return {
      props: {
        newVideos: [],
        topVideo: {} as IVideo,
        randomVideo: {} as IVideo
      } as HomeProps
    }
  }
}

export default HomePage
