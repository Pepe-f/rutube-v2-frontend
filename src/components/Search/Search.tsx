import { FC } from 'react'
import { GoSearch } from 'react-icons/go'

import VideoItem from '@/components/VideoItem/VideoItem'

import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'

const Search: FC = () => {
  const { data, handleSearch, searchTerm, isSuccess } = useSearch()

  return (
    <div className={styles.search}>
      <label>
        <input
          type='text'
          placeholder='Поиск видео...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <GoSearch width={45} height={45} fill='#5c5a69' />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {data?.length ? (
            data.map(video => <VideoItem key={video.id} item={video} />)
          ) : (
            <div className='text-white'>Видео не найдены!</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
