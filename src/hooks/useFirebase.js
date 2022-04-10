import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import auth from "../firebase.init";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user);
                console.log(user);
            })
    }

    return { user, signWithGoogle }

}
export default useFirebase;