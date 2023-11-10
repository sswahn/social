import { useState, useEffect } from 'react'
import CommentIcon from './CommentIcon.js'
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
    <button className={`${styles.comments} ${className || ''}`} onClick={handleClick}>
      <div>
        <div><CommentIcon /></div>
        <div>{counter}</div>
      </div>
      <div className={styles.tooltip} role="tooltip">Comment</div>
    </button>
  )
}

export default CommentButton
