import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from "../firebase/firebase.init";

initializingAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
                console.log("State changing is not working");
            }
            setIsLoading(false);
        });
    }, [auth]);
    //google signin
    const handleGoogleSignin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log("Signingout successfully!");
                setIsLoading(false);
            })
            .catch((error) => console.log(error.message));
    };
    return { user, handleGoogleSignin, handleLogOut, isLoading, setIsLoading };
};

export default useFirebase;