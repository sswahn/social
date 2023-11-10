# Social · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/social/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/social)

A collection of reusable social components for use with React.  

## Installation

Using npm.
```bash
npm install @sswahn/social
```  

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
The Avatar component displays user avatars or profile images. Has built in default when no image is provided.
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
A social like button with changeable icon and built-in customizable debouncing.
```javascript
<LikeButton
  className="my-custom-class"
  count={0}
  onClick={handleLikeClick}
  icon={heart} // heart or hand
  debounce={1000} // optional, default of 500 milliseconds
/>
```  

### ShareButton
```javascript
<ShareButton className="my-custom-class" count={0} onClick={handleShareClick} />
```

## License
Social is [MIT Licensed](https://github.com/sswahn/social/blob/main/LICENSE)
