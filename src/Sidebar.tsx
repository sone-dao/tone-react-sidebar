import React from 'react'
import styles from './Sidebar.module.scss'

export interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = ({}) => {
  const closeSidebar = () =>
    document.documentElement.style.setProperty('--sidebar-margin', '-100%')

  return (
    <div className={styles.sidebar}>
      <div className={styles.close}>
        <button onClick={() => closeSidebar()}>❌</button>
      </div>
    </div>
  )
}

export default Sidebar
