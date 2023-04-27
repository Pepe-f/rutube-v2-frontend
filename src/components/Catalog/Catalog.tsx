import { FC } from 'react'

import Heading from '@/components/UI/Heading/Heading'
import VideoItem from '@/components/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './Catalog.module.scss'

interface CatalogProps {
  newVideos: IVideo[]
  removeHandler?: (videoId: number) => void
  isUpdateLink?: boolean
}

const Catalog: FC<CatalogProps> = ({
  newVideos,
  isUpdateLink,
  removeHandler
}) => {
  return (
    <div className={styles.recommended}>
      <div className={styles['top-block']}>
        <Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
      </div>
      <div className={styles.catalog}>
        {newVideos.map(video => (
          <VideoItem
            key={video.id}
            item={video}
            removeHandler={removeHandler}
            isUpdateLink={isUpdateLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalog
