import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Bookmark {

  static bookmarks = null

  static handleBookmark(pageId) {

    if (GLOBAL.exploreScreen.state.bookmarks == null) {
      return
    }

    let newBookmarks = GLOBAL.exploreScreen.state.bookmarks

    const index = newBookmarks.indexOf(pageId)
    
    if (index > -1) {
      newBookmarks.splice(index, 1)
    } else {
      newBookmarks.push(pageId)
    }

    Bookmark.storeBookmarksData(newBookmarks)
  }

  static async getBookmarksData() {

    GLOBAL.exploreScreen.setState({
      bookmarks: []
    })

    Firebase.getUserRef().on('value', function(snapshot) {

      const snapVal = snapshot.val()
      
      if (!snapVal || !snapVal.bookmarks) {
        return
      }

      console.log('snapVal snapVal snapVal snapValsnapValsnapVal')
      console.log(snapVal)

      Bookmark.bookmarks = snapVal.bookmarks

      GLOBAL.exploreScreen.setState({
        bookmarks: snapVal.bookmarks
      })
    });

  }

  static refreshState() {
    GLOBAL.exploreScreen.setState({
      bookmarks: Bookmark.bookmarks
    })
  }

  static async storeBookmarksData(value) {

    Firebase.getUserRef().update({
      bookmarks: value
    });
    
  }

}

