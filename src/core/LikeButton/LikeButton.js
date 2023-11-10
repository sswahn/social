import { useState, useEffect } from 'react'
import LikeIcon from './LikeIcon.js'
import LikedIcon from './LikedIcon.js'
import styles from './styles.module.css'

const LikeButton = ({ className, count, onClick, icon }) => {
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    const isLiked = !liked
    const newCount = isLiked ? counter + 1 : counter - 1
    setLiked(isLiked)
    setCounter(newCount)
    onClick({ liked: isLiked, count: newCount })
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
