import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Bookmark {

  static bookmarks = null

  static handleBookmark(pageId, isBookmarked) {

    if (GLOBAL.exploreScreen.state.bookmarks == null || isBookmarked == null) {
      return
    }

    let newBookmarks = GLOBAL.exploreScreen.state.bookmarks

    if (isBookmarked) {
      const index = newBookmarks.indexOf(pageId)
      newBookmarks.splice(index, 1)
    } else {
      newBookmarks.push(pageId)
    }
    
    Bookmark.storeBookmarksData(newBookmarks)
    Bookmark.updateBookmarkStates(newBookmarks)
  }

  static async getBookmarkData() {

    // GLOBAL.exploreScreen.setState({
    //   bookmarks: []
    // })

    Firebase.getUserRef().on('value', function(snapshot) {

      const snapVal = snapshot.val()
      




      
      // if (!snapVal) {
      //   return
      // }







      if (!snapVal || !snapVal.bookmarks) {
        Bookmark.bookmarks = []
      } else {
        Bookmark.bookmarks = snapVal.bookmarks
      }

      // console.log('snapVal snapVal snapVal snapValsnapValsnapVal')
      // console.log(snapVal)

      // Bookmark.bookmarks = snapVal.bookmarks

      if (!GLOBAL.exploreScreen) {
        return
      }
      GLOBAL.exploreScreen.setState({
        bookmarks: Bookmark.bookmarks
      })
    });

  }

  static refreshState() {
    if (!Bookmark.bookmarks) {
      return
    }
    GLOBAL.exploreScreen.setState({
      bookmarks: Bookmark.bookmarks
    })
  }

  static async storeBookmarksData(bookmarks) {

    Firebase.getUserRef().update({
      bookmarks: bookmarks
    });
    
  }

  static updateBookmarkStates(bookmarks) {

    Bookmark.bookmarks = bookmarks
    GLOBAL.exploreScreen.setState({
      bookmarks: bookmarks
    })
  }

}

