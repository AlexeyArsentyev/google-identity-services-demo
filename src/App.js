import "./App.css";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken = response.access_token;

      console.log(accessToken);

      const apiUrl = "http://localhost:8080/api/v1/users/googleAuth";
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${accessToken}`);

      const requestOptions = {
        method: "POST",
        headers: headers,
      };

      fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
