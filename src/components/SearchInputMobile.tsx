import Placeholder from '@sone-dao/sone-react-placeholder'
import React from 'react'
import styles from '../Sidebar.module.scss'

export interface ISearchInputProps {}

const SearchInput: React.FC<ISearchInputProps> = ({}) => {
  return (
    <div className={styles.search}>
      <Placeholder display="Component: SearchInput" height="100%" />
    </div>
  )
}

export default SearchInput
