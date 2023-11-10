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
Bookmark button with built-in customizable debouncing. Customizing debounce is optional, it has a default of 500 milliseconds.
```javascript
<BookmarkButton
  className="custom-bookmark-btn"
  onClick={handleBookmarkClick}
  debounce={1000}
/>
```  

### CommentButton
```javascript
<CommentButton
  className="custom-Comment-btn"
  count={0}
  onClick={handleCommentClick}
/>
```  

### LikeButton
Like button with an optional choice of heart or hand icons. Also has built-in customizable debouncing. Customizing debounce is optional, it has a default of 500 milliseconds.
```javascript
<LikeButton
  className="custom-like-btn"
  count={0}
  onClick={handleLikeClick}
  icon={heart}
  debounce={1000}
/>
```  

### ShareButton
```javascript
<ShareButton
  className="custom-share-btn"
  onClick={handleShareClick}
/>
```

## Peer Dependencies
Social requires React as a peer dependency. You should have React installed in your project with a version compatible with this library.  

[React](https://reactjs.org/): ^18.2.0  

## Credits
This library uses Font Awesome Icons.
- Font Awesome Icons: [Font Awesome](https://fontawesome.com/)
  - Icons used under the [Font Awesome Free License](https://fontawesome.com/license/free).



## License
Social is [MIT Licensed](https://github.com/sswahn/social/blob/main/LICENSE)
