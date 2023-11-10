import CommentIcon from './CommentIcon.js'
import styles from './styles.module.css'

const CommentButton = ({ className, count, onClick }) => {
  return (
    <button className={`${styles.comments} ${className || ''}`} onClick={onClick}>
      <div>
        <div><CommentIcon /></div>
        <div>{count}</div>
      </div>
      <div className={styles.tooltip} role="tooltip">Comment</div>
    </button>
  )
}

export default CommentButton
