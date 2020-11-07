import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Like {

  static likes = null

  static handleLike(pageId, isLiked) {

    // console.log(isLiked)
    // console.log(GLOBAL.exploreScreen.state.likes)

    if (GLOBAL.exploreScreen.state.likes == null || isLiked == null) {
      return
    }

    let newLikes = GLOBAL.exploreScreen.state.likes

    if (isLiked) {
      const index = newLikes.indexOf(pageId)
      newLikes.splice(index, 1)
    } else {
      newLikes.push(pageId)
    }

    

    // const index = newLikes.indexOf(pageId)
    
    // if (index > -1) {
    //   newLikes.splice(index, 1)
    // } else {
    //   newLikes.push(pageId)
    // }

    Like.storeLikesData(newLikes)
  }

  static async getLikeData() {

    // GLOBAL.exploreScreen.setState({
    //   likes: []
    // })

    Firebase.getUserRef().on('value', function(snapshot) {

      const snapVal = snapshot.val()
      





      // if (!snapVal) {
      //   return
      // }



      



      if (!snapVal || !snapVal.likes) {
        Like.likes = []
      } else {
        Like.likes = snapVal.likes
      }

      // console.log(snapVal)

      // Like.likes = snapVal.likes

      if (!GLOBAL.exploreScreen) {
        return
      }
      GLOBAL.exploreScreen.setState({
        likes: Like.likes
      })
    });

  }

  static refreshState() {
    if (!Like.likes) {
      return
    }
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

