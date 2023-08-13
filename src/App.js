import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${respose.access_token}`,
          },
        });

        console.log(res.data, respose.access_token);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="App">
      <button onClick={login} className="googleBtn">
        <img src="googleLogo.png" alt="google logo" />
      </button>
    </div>
  );
}

export default App;
