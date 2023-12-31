import { ref } from "vue"
import { projectAuth } from "../firebase/config"


const error = ref(null)

const login = async (email: string, password: string) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null

        return res

    } catch (err: any) {
        error.value = err.message
    }
}







const useLogin = () => {
    return { error, login }
}

export default useLogin