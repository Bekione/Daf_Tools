import React from 'react'
import {findTitle} from './Header'

const MobileTitle = ({currentUrl, classNm}) => {
  return (
    <div className={`mobile_page_title ${classNm}`}>
        <h2 className='title'>{findTitle(currentUrl)}</h2>
    </div>
  )
}

export default MobileTitle