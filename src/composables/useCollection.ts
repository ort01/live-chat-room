import { ref } from "vue"
import { projectFirestore } from "../firebase/config"


const useCollection = (collectionName: string) => {
    const error = ref(null)

    const addDoc = async (doc: object) => {
        error.value = null

        try {
            await projectFirestore.collection(collectionName).add(doc)
        } catch (err: any) {
            error.value = err.message
        }
    }

    return { error, addDoc }
}

export default useCollection