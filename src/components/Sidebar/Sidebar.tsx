import Link from 'next/link'
import { FC } from 'react'

import Menu from '@/components/Menu/Menu'
import { menu } from '@/components/Menu/menu.data'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Link href='/' className={styles.logo}>
        Rutube 2.0
      </Link>
      <Menu title='Меню' items={menu} />
      <div className={styles.copy}>2023 RUTUBE 2.0</div>
    </aside>
  )
}

export default Sidebar
