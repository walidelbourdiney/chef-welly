import "./App.css";
import Header from "./Header";
import Main from "./main";

export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey); // Use it securely in your app

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
