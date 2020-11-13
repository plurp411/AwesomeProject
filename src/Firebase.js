import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

export default class Firebase {

    static firebase = null
    static database = null
    static auth = null

    static user = null

    static start() {
        
        const firebaseConfig = {
            apiKey: "AIzaSyCccYsv-qFz0HAExhRXPGu2TDStRQhG8_o",
            authDomain: "workouts-1f2c7.firebaseapp.com",
            databaseURL: "https://workouts-1f2c7.firebaseio.com",
            projectId: "workouts-1f2c7",
            storageBucket: "workouts-1f2c7.appspot.com",
            messagingSenderId: "78808038586",
            appId: "1:78808038586:web:f77a49c55e962350e01683",
            measurementId: "G-E4MCYXXCYK"
        }
        
        firebase.initializeApp(firebaseConfig)

        // Firebase.firebase = firebase

        // let database = firebase.database();

        firebase.database.enableLogging(function(message) {
            console.log("[FIREBASE]", message);
        });

        let database = firebase.database();
        let auth = firebase.auth();

        Firebase.firebase = firebase
        Firebase.database = database
        Firebase.auth = auth

        // return firebase
        return Firebase.firebase
    }

    // static setUser(user) {
    //     Firebase.user = user
    // }

    static getUserRef() {
        if (!Firebase.user) {
            return null
        }
        return Firebase.database.ref('users/' + Firebase.user.uid)
    }

    static getWorkoutRef(pageId) {
        return Firebase.database.ref('workouts/' + pageId)
    }

    static getWorkoutsRef() {
        return Firebase.database.ref('workouts')
    }

    static getCategoriesRef() {
        return Firebase.database.ref('categories')
    }

    static getConnectedRef() {
        return Firebase.database.ref(".info/connected")
    }

    static handleLogoutUser() {
        Firebase.auth.signOut()
    }

    static handleLoginUser(email, password) {
        return Firebase.auth.signInWithEmailAndPassword(email, password).then(() => {
            return ''
        }).catch(function(error) {
            return error.message
        });
    }

    static handleCreateUser(email, password) {
        return Firebase.auth.createUserWithEmailAndPassword(email, password).then(() => {
            return ''
        }).catch(function(error) {
            return error.message
        });
    }

    static uploadUserInfo(email) {
        return Firebase.getUserRef().update({
            email: email
        }).then(() => {
            return true
        })
    }

    // static getUser() {
    //     if (!Firebase.user) {
    //         return null
    //     }
    //     return Firebase.user
    // }

}

