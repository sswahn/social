import { useState, useEffect } from 'react'
import { debounce } from '../../utilities/debounce'
import CommentsIcon from './CommentsIcon'
import styles from './styles.module.css'

const CommentsButton = ({ className, initialCount, onChange }) => {
  const [count, setCount] = useState(0)
  const debouncedOnChange = debounce(onChange, 500)

  const handleClick = event => {
    const newCount = !commented ? count + 1 : count - 1
    setCount(newCount)
    debouncedOnChange({ count: newCount })
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button className={`${styles.comments} ${className}`} onClick={handleClick}>
      <div><CommentsIcon /> {count}</div>
      <div className={styles.tooltip} role="tooltip">Comment</div>
    </button>
  )
}

export default CommentsButton