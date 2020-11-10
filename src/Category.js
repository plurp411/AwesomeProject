import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Category {

  static categories = null

  static async getCategoryData() {

    Firebase.getCategoriesRef().once('value', function(snapshot) {

      const snapVal = snapshot.val()
      
      if (!snapVal) {
        return
      }

      Category.categories = snapVal
      
      if (!GLOBAL.exploreScreen) {
        return
      }
      GLOBAL.exploreScreen.setState({
        categories: snapVal
      })
    });

  }

  static refreshState() {
    if (!Category.categories) {
      return
    }
    GLOBAL.exploreScreen.setState({
      categories: Category.categories
    })
  }

}

