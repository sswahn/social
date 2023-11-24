import styles from './styles.module.css'
const UserImage = size => {
  return (
    <img src={image} alt={`${username}'s avatar`} width={size || '40px'} height={size || '40px'} />
  )
}
export default UserImage
