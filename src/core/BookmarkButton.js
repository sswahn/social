import { useState } from 'react'
import BookmarkIcon from './LikeIcon'
import BookmarkedIcon from './LikedIcon'
import styles from './styles.module.css'

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const BookmarkButton = ({ className, onChange }) => {
  const [bookmark, setBookmark] = useState(false)
  const debouncedOnChange = debounce(onChange, 500)

  const handleClick = event => {
    const isBookmarked = !bookmark
    setLiked(isBookmarked)
    debouncedOnChange({ bookmarked: isBookmarked })
  }

  return (
    <button className={`${styles.bookmark} ${className}`} onClick={handleClick}>
      <div>{bookmark ? <BookmarkedIcon /> : <BookmarkIcon />} {count}</div>
      <div className={styles.tooltip} role="tooltip">{bookmark ? 'Bookmarked' : 'Bookmark'}</div>
    </button>
  )
}

export default BookmarkButton
