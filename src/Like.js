import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Like {

  static likes = null

  static handleLike(pageId) {

    if (GLOBAL.exploreScreen.state.likes == null) {
      return
    }

    let newLikes = GLOBAL.exploreScreen.state.likes

    const index = newLikes.indexOf(pageId)
    
    if (index > -1) {
      newLikes.splice(index, 1)
    } else {
      newLikes.push(pageId)
    }

    Like.storeLikesData(newLikes)
  }

  static async getLikesData() {

    GLOBAL.exploreScreen.setState({
      likes: []
    })

    Firebase.getUserRef().on('value', function(snapshot) {

      const snapVal = snapshot.val()
      
      if (!snapVal || !snapVal.likes) {
        return
      }

      console.log(snapVal)

      Like.likes = snapVal.likes

      GLOBAL.exploreScreen.setState({
        likes: snapVal.likes
      })
    });

  }

  static refreshState() {
    GLOBAL.exploreScreen.setState({
      likes: Like.likes
    })
  }

  static async storeLikesData(value) {

    Firebase.getUserRef().update({
      likes: value
    });
    
  }

}

