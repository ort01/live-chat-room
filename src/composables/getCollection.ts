// getCollection - is to set up a listener to get the documents from the collection

import { ref } from "vue";
import { projectFirestore } from "../firebase/config";


const getCollection = (collectionName: string) => {

    const error: any = ref(null)
    const documents: any = ref([])

    //colection reference
    let collectionRef = projectFirestore.collection(collectionName).orderBy("createdAt")

    //onSnapshot is how we set up a real time listener to the firestore database, 
    //each time theres a change in that database collection it sends us back a snapShot (with all of the data from that moment in time) and fires the callback F
    collectionRef.onSnapshot((snapshot) => {
        let results: any = []

        //cycling through the documents and adding each document to results array
        snapshot.docs.forEach((doc) => {
            // must wait for the server to create the timestamp & send it back
            // we don't want to edit data until it has done this
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        documents.value = []
        error.value = err.message
    })

    return { error, documents }

}

export default getCollection