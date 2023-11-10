# Social · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/social/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/social)

A collection of reusable social components for use with React.  

## Usage
Import the components.
```javascript
import {
  Avatar,
  BookmarkButton,
  CommentButton,
  LikeButton,
  ShareButton
} from '@sswahn/social'
```

### Avatar
The Avatar component displays user avatars or profile images. Easily create an avatar element with support for custom user images and badges.
```javascript
<Avatar
  className="custom-avatar"
  image="/path/to/user-avatar.jpg"
  username="JohnDoe"
  onClick={handleClick}
/>
```  

### BookmarkButton
```javascript
<BookmarkButton className="my-custom-class" onClick={handleBookmarkClick} />
```  

### CommentButton
```javascript
<CommentButton className="my-custom-class" count={0} onClick={handleCommentClick} />
```  

### LikeButton
```javascript
<LikeButton className="my-custom-class" count={0} onClick={handleLikeClick} />
```  

### ShareButton
```javascript
<ShareButton className="my-custom-class" count={0} onClick={handleShareClick} />
```

## License
Social is [MIT Licensed](https://github.com/sswahn/social/blob/main/LICENSE)
