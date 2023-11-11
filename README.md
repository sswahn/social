# Social · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/social/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/social) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/social)

A collection of customizable, reusable social components for use with React.  

## Features
- **Customizable Avatar Component**: Display user avatars with a built-in default, allowing customization through a custom class, inclusion of user-specific information, and support for click events.
- **BookmarkButton for Content Saving**: Enable users to save or bookmark content with a customizable button appearance and functionality for handling bookmark click events.
- **Interactive CommentButton**: Enhance user engagement with comments through a button displaying comment counts, customizable appearance using a custom class, and click event handling.
- **LikeButton with Icon Options**: Express user approval with a customizable like button, offering options for heart or hand icons, along with customization of appearance, like counts, and click event handling.
- **ShareButton for Content Sharing**: Facilitate easy content sharing with a customizable share button, including appearance customization through a custom class and functionality for handling share click events.
  
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
The `Avatar` component displays user avatars and has a built in default when no image is provided.
```javascript
<Avatar
  className="custom-avatar"
  image="/path/to/user-avatar.jpg"
  username="JohnDoe"
  onClick={handleClick}
/>
```  

### BookmarkButton
The `BookmarkButton` component represents a button that users can interact with to bookmark or save content.
```javascript
<BookmarkButton
  className="custom-bookmark-btn"
  onClick={handleBookmarkClick}
/>
```  

### CommentButton
The `CommentButton` component is a button users can click to interact with comments. It displays the comment count and is customizable with a custom class.
```javascript
<CommentButton
  className="custom-Comment-btn"
  count={0}
  onClick={handleCommentClick}
/>
```  

### LikeButton
The `LikeButton` has an optional choice of heart or hand icons, it defaults to hand. Handle click events to implement desired functionality.
```javascript
<LikeButton
  className="custom-like-btn"
  icon={heart}
  count={0}
  onClick={handleLikeClick}
/>
```  

### ShareButton
The `ShareButton` component is a button users can click to share content.
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
