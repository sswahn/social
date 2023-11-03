import { useState, useEffect } from 'react'
import CommentIcon from './CommentIcon'
import styles from './styles.module.css'

const CommentButton = ({ className, count, onClick }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = event => {
    onClick()
  }

  useEffect(() => {
    setCounter(count)
  }, [count])

  return (
    <button className={`${styles.comments} ${className}`} onClick={handleClick}>
      <div><CommentIcon /> {counter}</div>
      <div className={styles.tooltip} role="tooltip">Comment</div>
    </button>
  )
}

export default CommentButton