import { useState, useEffect } from 'react'
import { debounceUtility } from '../../utilities/debounceUtility.js'
import ShareIcon from './ShareIcon.js'
import SharedIcon from './SharedIcon.js'
import styles from './styles.module.css'

const ShareButton = ({ className, count, onClick, debounce }) => {
  const [shared, setShared] = useState(false)
  const [counter, setCounter] = useState(0)
  const debouncedOnClick = debounceUtility(onClick, debounce || 500)

  const handleClick = () => {
    const isShared = !shared
    const newCount = isShared ? counter + 1 : counter - 1
    setShared(isShared)
    setCounter(newCount)
    debouncedOnClick({ shared: isShared, count: newCount })
  }

  useEffect(() => {
    setCounter(count)
  }, [count])

  return (
    <button className={`${styles.share} ${className}`} onClick={handleClick}>
      <div>{shared ? <SharedIcon /> : <ShareIcon />} {counter}</div>
      <div className={styles.tooltip} role="tooltip">{shared ? 'Shared' : 'Share'}</div>
    </button>
  )
}

export default ShareButton
