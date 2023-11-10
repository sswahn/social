import { useState } from 'react'
import { debounceUtility } from '../../utilities/debounceUtility.js'
import BookmarkIcon from './LikeIcon.js'
import BookmarkedIcon from './LikedIcon.js'
import styles from './styles.module.css'

const BookmarkButton = ({ className, onClick, debounce }) => {
  const [bookmark, setBookmark] = useState(false)
  const debouncedOnClick = debounceUtility(onClick, debounce || 500)

  const handleClick = event => {
    const isBookmarked = !bookmark
    setBookmark(isBookmarked)
    debouncedOnClick({ bookmarked: isBookmarked })
  }

  return (
    <button className={`${styles.bookmark} ${className}`} onClick={handleClick}>
      <div>{bookmark ? <BookmarkedIcon /> : <BookmarkIcon />}</div>
      <div className={styles.tooltip} role="tooltip">{bookmark ? 'Bookmarked' : 'Bookmark'}</div>
    </button>
  )
}

export default BookmarkButton
