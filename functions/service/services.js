


function addViewCount(postId){
    return admin.database().ref(`classes`).child(postId).child('viewcnt').set('1')
}