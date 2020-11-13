import Firebase from './Firebase.js';
import GLOBAL from './global.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    return null
  }
}

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

    Bookmark.getSetFromStorage()

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
      storeData('@bookmarks', Bookmark.bookmarks)

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

    storeData('@bookmarks', bookmarks)

    Firebase.getConnectedRef().on("value", function(snap) {
      if (snap.val() === true) {
        
        Firebase.getUserRef().update({
          bookmarks: bookmarks
        });

      } else {
        
        Bookmark.getSetFromStorage()
      }
    });
    
  }

  static updateBookmarkStates(bookmarks) {

    Bookmark.bookmarks = bookmarks
    GLOBAL.exploreScreen.setState({
      bookmarks: bookmarks
    })
  }

  static async getSetFromStorage() {

    const bookmarks = await getData('@bookmarks')

    console.log('bookmarks bookmarksbookmarksbookmarksbookmarksbookmarks')
    console.log(bookmarks)

    if (!bookmarks) {
      return
    }

    Bookmark.bookmarks = bookmarks

    if (!GLOBAL.exploreScreen) {
      return
    }
    GLOBAL.exploreScreen.setState({
      bookmarks: Bookmark.bookmarks
    })
  }

}

