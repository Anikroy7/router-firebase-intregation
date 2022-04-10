import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import auth from "../firebase.init";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            setUser(user)

        })

    }, [])

    const handelSignOut = () => {

        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,
        handelSignOut,
        signWithGoogle
    }

}
export default useFirebase;