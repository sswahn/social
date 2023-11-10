import { useState, useEffect, useRef } from 'react'
import HandLikeIcon from './HandLikeIcon.js'
import HandLikedIcon from './HandLikedIcon.js'
import HeartLikeIcon from './HeartLikeIcon.js'
import HeartLikedIcon from './HeartLikedIcon.js'
import styles from './styles.module.css'

const LikeButton = ({ className, icon, count, onClick }) => {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
    onClick()
  }

  return (
    <button className={`${styles.like} ${className || ''}`} onClick={handleClick}>
      <div>
        <div>{liked ? (icon === 'heart' ? <HeartLikedIcon /> : <HandLikedIcon />) : (icon === 'heart' ? <HeartLikeIcon /> : <HandLikeIcon />)}</div>
        <div>{count}</div>
      </div>
      <div className={styles.tooltip} role="tooltip">{liked ? 'Liked' : 'Like'}</div>
    </button>
  )
}

export default LikeButton
