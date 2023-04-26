import { FC } from 'react'

import MenuItem from '@/components/Menu/MenuItem'
import { IMenuItem } from '@/components/Menu/menu.interface'
import Line from '@/components/UI/Line/Line'

import styles from './Menu.module.scss'

interface MenuProps {
  title: string
  items: IMenuItem[]
}

const Menu: FC<MenuProps> = ({ items, title }) => {
  return (
    <nav className={styles.menu}>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <MenuItem key={item.link} item={item} />
        ))}
      </ul>
      <Line />
    </nav>
  )
}

export default Menu
