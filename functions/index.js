const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// listener for when user add new post
exports.observeClassAdd = functions.database.ref('classes/{pushId}')
    .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();

        var postId = context.params.pushId;

        console.log(original);
        console.log(postId)

        return  Promise.all([addViewCount(postId)])


    });


 //   observeClassAdd({}, {params: {"pushId":"-LaeCAA9TezbYYlCGAEl"}})
function addViewCount(postId){
        return admin.database().ref(`classes`).child(postId).child('rating').set(genRand(1,5,1))
}

function genRand(min, max, decimalPlaces) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}


