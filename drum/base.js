
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAxVVg13qR_269WMhtJ9jCND7Vw-8PZo_k",
    authDomain: "drums-78e41.firebaseapp.com",
    projectId: "drums-78e41",
    storageBucket: "drums-78e41.appspot.com",
    messagingSenderId: "892194564504",
    appId: "1:892194564504:web:a8a5cc9f33246f86c763ed"
  }

    firebase.initializeApp(firebaseConfig)

})()

    var db = firebase.firestore()
   db.collection('musicas').get().then((snapshot)=>{
       snapshot.docs.forEach(doc=>{
         def(doc.data())
       })
   })

