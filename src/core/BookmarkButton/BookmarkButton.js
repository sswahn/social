import { useState } from 'react'
import { debounce } from '../../utilities/debounce'
import BookmarkIcon from './LikeIcon'
import BookmarkedIcon from './LikedIcon'
import styles from './styles.module.css'

const BookmarkButton = ({ className, onChange }) => {
  const [bookmark, setBookmark] = useState(false)
  const debouncedOnChange = debounce(onChange, 500)

  const handleClick = event => {
    const isBookmarked = !bookmark
    setBookmark(isBookmarked)
    debouncedOnChange({ bookmarked: isBookmarked })
  }

  return (
    <button className={`${styles.bookmark} ${className}`} onClick={handleClick}>
      <div>{bookmark ? <BookmarkedIcon /> : <BookmarkIcon />}</div>
      <div className={styles.tooltip} role="tooltip">{bookmark ? 'Bookmarked' : 'Bookmark'}</div>
    </button>
  )
}

export default BookmarkButton
