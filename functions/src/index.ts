import * as functions from 'firebase-functions';
const admin= require('firebase-admin');

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 export const getConfig = functions.https.onRequest((request, response) => {
   admin.firestore().collection('initialConfig')
   .get()
   .then((data:any)=>{
     let test:any=[];
     data.forEach((doc : any) => {
       test.push(doc.data())
      });
      return response.json(test);
   })
   .catch((error:any)=> console.log(error));
 });

