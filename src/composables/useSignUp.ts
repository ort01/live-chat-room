import { ref } from "vue"
import { projectAuth } from "../firebase/config"


const error = ref(null)


const signUp = async (email: string, password: string, displayName: string) => {
    error.value = null
    try {
        const res: any = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        } else {
            await res.user.updateProfile({ displayName: displayName })
            // await the res object; 
            // we get back the user; 
            // method updateProfile whwre we pass in an object in which, we can update any existing property on the res.user that we want


            error.value = null
            return res
        }
    } catch (err: any) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignUp = () => {
    return { error, signUp }
}



export default useSignUp 