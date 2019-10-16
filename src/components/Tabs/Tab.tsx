import React, { FC, useContext } from 'react'

import { TabsContext } from './context'
import Clickable from '../Clickable'

const Tab: FC<TabProps> = ({ id, label }) => {
  const { activeTab, onTabClick } = useContext(TabsContext)
  const handleClick = () => {
    onTabClick(id)
  }

  return <Clickable onClick={handleClick}>{label}</Clickable>
}

export { Tab }
