import { FC } from 'react'

import IconsRight from '@/components/IconsRight/IconsRight'
import Search from '@/components/Search/Search'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Search />
      <IconsRight />
    </header>
  )
}

export default Header
