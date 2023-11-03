import { useState, useEffect } from 'react'
import { debounce } from '../../utilities/debounce'
import LikeIcon from './LikeIcon'
import LikedIcon from './LikedIcon'
import styles from './styles.module.css'

const LikeButton = ({ className, initialCount, onClick }) => {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const debouncedOnClick = debounce(onClick, 500)

  const handleClick = () => {
    const isLiked = !liked
    const newCount = isLiked ? count + 1 : count - 1
    setLiked(isLiked)
    setCount(newCount)
    debouncedOnClick({ liked: isLiked, count: newCount })
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button className={`${styles.like} ${className}`} onClick={handleClick}>
      <div>{liked ? <LikedIcon /> : <LikeIcon />} {count}</div>
      <div className={styles.tooltip} role="tooltip">{liked ? 'Liked' : 'Like'}</div>
    </button>
  )
}

export default LikeButton
