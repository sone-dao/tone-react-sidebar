import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import styles from '../Sidebar.module.scss'

export interface IUserInfoProps {}

const UserInfo: React.FC<IUserInfoProps> = ({}) => {
  return (
    <div className={styles.user}>
      <Placeholder display="Component: UserInfo" height="100%" />
    </div>
  )
}

export default UserInfo
