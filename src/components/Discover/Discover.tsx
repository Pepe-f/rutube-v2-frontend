import { FC } from 'react'

import LargeVideoItem from '@/components/VideoItem/LargeVideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './Discover.module.scss'

interface DiscoverProps {
  topVideo: IVideo
  randomVideo: IVideo
}

const Discover: FC<DiscoverProps> = ({ topVideo, randomVideo }) => {
  return (
    <div className={styles.discover}>
      <div className={styles['top-video']}>
        <LargeVideoItem video={topVideo} />
      </div>
      <div className={styles['random-video']}>
        <LargeVideoItem video={randomVideo} />
      </div>
    </div>
  )
}

export default Discover
