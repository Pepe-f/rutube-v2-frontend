import Link from 'next/link'
import { FC } from 'react'

import Menu from '@/components/Menu/Menu'
import { menu } from '@/components/Menu/menu.data'

import { useAuth } from '@/hooks/useAuth'

import { apiRtk } from '@/store/api/api'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const { user } = useAuth()

  const { data } = apiRtk.useGetProfileQuery(null, {
    skip: !user
  })

  return (
    <aside className={styles.sidebar}>
      <Link href='/' className={styles.logo}>
        Rutube 2.0
      </Link>
      <Menu title='Меню' items={menu} />
      {user && (
        <Menu
          title='Мои подписки'
          items={
            data?.subscriptions.map(({ toChannel }) => ({
              image: toChannel.avatarPath,
              title: toChannel.name,
              link: `/c/${toChannel.id}`
            })) || []
          }
        />
      )}
      <div className={styles.copy}>2023 RUTUBE 2.0</div>
    </aside>
  )
}

export default Sidebar
