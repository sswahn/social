import { useState, useEffect } from 'react'
import HandLikeIcon from './HandLikeIcon.js'
import HandLikedIcon from './HandLikedIcon.js'
import HeartLikeIcon from './HeartLikeIcon.js'
import HeartLikedIcon from './HeartLikedIcon.js'
import styles from './styles.module.css'

const LikeButton = ({ className, icon, count, onClick }) => {
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    const isLiked = !liked
    setLiked(isLiked)
    onClick({ liked: isLiked, count: newCount })
  }

  useEffect(() => {
    setCounter(count)
  }, [count])

  return (
    <button className={`${styles.like} ${className || ''}`} onClick={handleClick}>
      <div>
        <div>{liked ? (icon === 'heart' ? <HeartLikedIcon /> : <HandLikedIcon />) : (icon === 'heart' ? <HeartLikeIcon /> : <HandLikeIcon />)}</div>
        <div>{counter}</div>
      </div>
      <div className={styles.tooltip} role="tooltip">{liked ? 'Liked' : 'Like'}</div>
    </button>
  )
}

export default LikeButton
