import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import styles from '../Sidebar.module.scss'

export interface INavMenuProps {}

const NavMenu: React.FC<INavMenuProps> = ({}) => {
  return (
    <div className={styles.nav}>
      <Placeholder display="Component: NavMenu" height="100%" color="#FF0000" />
    </div>
  )
}

export default NavMenu
