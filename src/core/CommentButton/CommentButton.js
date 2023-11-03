import { useState, useEffect } from 'react'
import CommentIcon from './CommentIcon'
import styles from './styles.module.css'

const CommentButton = ({ className, initialCount, onClick }) => {
  const [count, setCount] = useState(0)

  const handleClick = event => {
    onClick()
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button className={`${styles.comments} ${className}`} onClick={handleClick}>
      <div><CommentIcon /> {count}</div>
      <div className={styles.tooltip} role="tooltip">Comment</div>
    </button>
  )
}

export default CommentButton
