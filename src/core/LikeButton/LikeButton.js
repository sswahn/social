import { useState, useEffect } from 'react'
import { debounceUtility } from '../../utilities/debounceUtility'
import LikeIcon from './LikeIcon.js'
import LikedIcon from './LikedIcon.js'
import styles from './styles.module.css'

const LikeButton = ({ className, count, onClick, icon, debounce }) => {
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(0)
  const debouncedOnClick = debounceUtility(onClick, debounce || 500)

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
