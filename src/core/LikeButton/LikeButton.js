import { useState, useEffect } from 'react'
import { debounce } from '../../utilities/debounce'
import LikeIcon from './LikeIcon'
import LikedIcon from './LikedIcon'
import styles from './styles.module.css'

const LikeButton = ({ className, count, onClick }) => {
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(0)
  const debouncedOnClick = debounce(onClick, 500)

  const handleClick = () => {
    const isLiked = !liked
    const newCount = isLiked ? counter + 1 : counter - 1
    setLiked(isLiked)
    setCounter(newCount)
    debouncedOnClick({ liked: isLiked, count: newCount })
  }

  useEffect(() => {
    setCounter(count)
  }, [count])

  return (
    <button className={`${styles.like} ${className}`} onClick={handleClick}>
      <div>{liked ? <LikedIcon /> : <LikeIcon />} {counter}</div>
      <div className={styles.tooltip} role="tooltip">{liked ? 'Liked' : 'Like'}</div>
    </button>
  )
}

export default LikeButton
