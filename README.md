# Social

A library of React components for managing social actions like bookmarking, commenting, liking, and sharing.

## Usage
To use the components provided by this library, you need to import them into your React application and integrate them as needed.
```javascript
import {
  BookmarkButton,
  CommentButton,
  LikeButton,
  ShareButton
} from '@sswahn/social'
```

### BookmarkButton
```javascript
<BookmarkButton className="my-custom-class" onChange={handleBookmarkChange} />
```  

### CommentButton
```javascript
<CommentButton className="my-custom-class" initialCount={0} onChange={handleCommentChange} />
```  

### LikeButton
```javascript
<LikeButton className="my-custom-class" initialCount={0} onChange={handleLikeChange} />
```  

### ShareButton
```javascript
<ShareButton className="my-custom-class" initialCount={0} onChange={handleShareChange} />
```

