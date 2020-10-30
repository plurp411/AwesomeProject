import AsyncStorage from '@react-native-async-storage/async-storage';
import GLOBAL from './global.js'

export default class Bookmark {

  // constructor() {
  //   Bookmark.bookmarks = null
  // }

  static bookmarks = null

  // constructor() {
  //   GLOBAL.bookmarks = this;
  // }

  // static getBookmarks() {
  //   return Bookmark.bookmarks
  // }

  static handleBookmark(pageId) {

    Bookmark.getBookmarksData()

    if (GLOBAL.exploreScreen.state.bookmarks == null) {
      return
    }

    let newBookmarks = GLOBAL.exploreScreen.state.bookmarks

    // const { pageId } = Bookmark.props
    const index = newBookmarks.indexOf(pageId)
    
    if (index > -1) {
      newBookmarks.splice(index, 1)
    } else {
      newBookmarks.push(pageId)
    }

    Bookmark.storeBookmarksData({
      bookmarks: newBookmarks
    })

    Bookmark.getBookmarksData()
    // console.log(newBookmarks)
  }

  static async getBookmarksData() {
    try {
      const value = await AsyncStorage.getItem('@bookmarks')
      if (value !== null) {
        const parsed = JSON.parse(value)
        GLOBAL.exploreScreen.setState({
          bookmarks: parsed['bookmarks']
        })
        // GLOBAL.bookmarks = parsed['bookmarks']
        // console.log('JSON.parse(value)')
        // console.log(parsed)
      } else {
        GLOBAL.exploreScreen.setState({
          bookmarks: []
        })
        // GLOBAL.bookmarks = []
        // console.log('JSON.parse(value)  222')
        // console.log(JSON.parse(value))
      }
    } catch(e) {
      // error reading value
      console.log('errore')
      console.log(e)
    }

    // return Bookmark.bookmarks
  }

  static async storeBookmarksData(value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@bookmarks', jsonValue)
    } catch (e) {
      // saving error
    }
  }

}

