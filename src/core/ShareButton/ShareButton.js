import { useState } from 'react'
import ShareIcon from './ShareIcon.js'
import SharedIcon from './SharedIcon.js'
import styles from './styles.module.css'

const ShareButton = ({ className, onClick }) => {
  const [shared, setShared] = useState(false)

  const handleClick = () => {
    setShared(!shared)
    onClick()
  }

  return (
    <button className={`${styles.share} ${className || ''}`} onClick={handleClick}>
      <div>{shared ? <SharedIcon /> : <ShareIcon />}</div>
      <div className={styles.tooltip} role="tooltip">{shared ? 'Shared' : 'Share'}</div>
    </button>
  )
}

export default ShareButton
