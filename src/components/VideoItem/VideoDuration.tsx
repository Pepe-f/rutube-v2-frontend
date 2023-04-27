import { FC } from 'react'

import styles from './VideoItem.module.scss'

interface VideoDurationProps {
  duration: number
  isBottom?: boolean
}

const VideoDuration: FC<VideoDurationProps> = ({ duration, isBottom }) => {
  return <time className={isBottom ? styles.bottom : ''}>{duration} мин.</time>
}

export default VideoDuration
