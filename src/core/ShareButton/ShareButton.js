import { useState, useEffect } from 'react'
import { debounce } from '../../utilities/debounce'
import ShareIcon from './ShareIcon'
import SharedIcon from './SharedIcon'
import styles from './styles.module.css'

const ShareButton = ({ className, initialCount, onClick }) => {
  const [shared, setShared] = useState(false)
  const [count, setCount] = useState(0)
  const debouncedOnClick = debounce(onClick, 500)

  const handleClick = () => {
    const isShared = !shared
    const newCount = isShared ? count + 1 : count - 1
    setShared(isShared)
    setCount(newCount)
    debouncedOnClick({ shared: isShared, count: newCount })
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button className={`${styles.share} ${className}`} onClick={handleClick}>
      <div>{shared ? <SharedIcon /> : <ShareIcon />} {count}</div>
      <div className={styles.tooltip} role="tooltip">{shared ? 'Shared' : 'Share'}</div>
    </button>
  )
}

export default ShareButton
