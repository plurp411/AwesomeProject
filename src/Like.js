import Firebase from './Firebase.js';
import GLOBAL from './global.js'
import Workout from './Workout.js'

export default class Like {

  static likes = null

  static handleLike(pageId, isLiked, likesCount) {

    // console.log(isLiked)
    // console.log(GLOBAL.exploreScreen.state.likes)

    if (GLOBAL.exploreScreen.state.likes == null || isLiked == null) {
      return
    }

    let newLikes = GLOBAL.exploreScreen.state.likes
    let newLikesCount = likesCount

    if (isLiked) {
      const index = newLikes.indexOf(pageId)
      newLikes.splice(index, 1)
      newLikesCount--
    } else {
      newLikes.push(pageId)
      newLikesCount++
    }
    

    // const index = newLikes.indexOf(pageId)
    
    // if (index > -1) {
    //   newLikes.splice(index, 1)
    // } else {
    //   newLikes.push(pageId)
    // }


    Like.updateLikeStates(newLikes, newLikesCount, pageId)
    Like.storeLikesData(newLikes, isLiked, pageId)
  }

  static async getLikeData() {

    // GLOBAL.exploreScreen.setState({
    //   likes: []
    // })

    Firebase.getUserRef().once('value', function(snapshot) {

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

  static async storeLikesData(newLikes, isLiked, pageId) {

    Firebase.getUserRef().update({
      likes: newLikes
    });

    Firebase.getWorkoutRef(pageId).once('value', function(snapshot) {

      const snapVal = snapshot.val()

      if (!snapVal) {
        return
      }

      let newLikesCount = snapVal.likes
      if (isLiked) {
        newLikesCount--
      } else {
        newLikesCount++
      }
  
      Firebase.getWorkoutRef(pageId).update({
        likes: newLikesCount
      });
    });
    
  }

  static updateLikeStates(newLikes, newLikesCount, pageId) {

    Like.likes = newLikes
    GLOBAL.exploreScreen.setState({
      likes: newLikes
    })

    Workout.workouts[pageId].likes = newLikesCount

    let newWorkouts = GLOBAL.exploreScreen.state.workouts
    newWorkouts[pageId].likes = newLikesCount

    GLOBAL.exploreScreen.setState({
      workouts: newWorkouts
    })
  }

}

