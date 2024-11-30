import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import app from "./firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);

export default function Login({setIsAdmin}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    setLoading(true)
    // Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check Firestore for admin role
    const userDoc = await getDoc(doc(db, "users", user.uid)); 
    if (userDoc.exists()) {
      const userData = userDoc.data();
       if (userData && userData.role === "admin") {
        setIsAdmin(true)
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        setError("You are not authorized to access the admin panel.");
      }
    } else {
      setError("User not found in Firestore.");
    }
  } catch (err) {
    console.error(err);
     setError("Login failed. Please check your email and password.");
  }
  finally {
    setLoading(false)
  }
};


  return (
    <section className="h-screen flex justify-center flex-col items-center bg-black p-4 text-white">
      <form
        onSubmit={handleLogin}
        className="border-2 p-5 border-[#44BBA4] w-full md:w-7/12 h-80 flex justify-center items-center flex-col rounded-2xl mx-auto"
      >
        <h2 className="text-3xl font-['Poppins',sans-serif] font-bold">Admin Login</h2>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          className="mt-7 text-white border-2 bg-transparent w-full rounded p-4"
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          className="mt-7 text-white border-2 bg-transparent w-full rounded p-4"
          required
        />
        <input
          type="submit"
          value="Login"
          className="mt-7 text-white bg-[#44BBA4] text-lg w-full rounded-lg p-4"
        />
     </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {loading && (
        <div className="flex-col h-full fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-10">
          <img src="/tube-spinner (1).svg" className="w-80" alt="Loading..." />
          <p className="text-3xl text-white">Checking Info...</p>
        </div>
      )}
    </section>
  );
}