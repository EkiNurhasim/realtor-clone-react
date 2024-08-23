import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();

  const handleOAuth = async () => {
    try {
      // oauth authentication save auth with google
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("could not authorize with google");
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleOAuth}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 transition duration-200 ease-in-out shadow-md hover:shadow-lg active:shadow-lg rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with google
    </button>
  );
}
