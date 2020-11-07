import Firebase from './Firebase.js';
import GLOBAL from './global.js'

export default class Workout {

  static workouts = null

  static async getWorkoutData() {

    // GLOBAL.exploreScreen.setState({
    //   workouts: {}
    // })

    Firebase.getWorkoutsRef().on('value', function(snapshot) {

      const snapVal = snapshot.val()
      
      if (!snapVal) {
        return
      }

      // console.log('snapVal snapVal snapVal snapValsnapValsnapVal')
      // console.log(snapVal)

      Workout.workouts = snapVal
      
      if (!GLOBAL.exploreScreen) {
        return
      }
      GLOBAL.exploreScreen.setState({
        workouts: snapVal
      })
    });

  }

  static refreshState() {
    if (!Workout.workouts) {
      return
    }
    GLOBAL.exploreScreen.setState({
      workouts: Workout.workouts
    })
  }

}

