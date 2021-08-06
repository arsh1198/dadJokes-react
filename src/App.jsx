import React, { useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import JokeCard from "./components/JokeCard";
import Button from "./components/Button";
import useJoke from "./hooks/use-joke";
import { theme } from "./hooks/use-theme";
import { ImShuffle } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import Logo from "./components/Logo";
import toast, { toastConfig } from "react-simple-toasts";

function App() {
  const [joke, fetchRandomJoke] = useJoke();

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  toastConfig({
    position: "top",
    time: 4000,
  });

  return (
    <div className="App">
      <Background>
        <div style={{ zIndex: 10 }}>
          <JokeCard joke={joke} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <Button
              title="Copy to Clipboard"
              onClick={() => {
                navigator.clipboard.writeText(joke.data.joke).then(() => {
                  toast("Copied to Clipboard!");
                });
              }}
              style={{
                background: theme.LIGHT.buttonText,
                marginRight: "10px",
              }}
            >
              <FaCopy color={theme.LIGHT.button} />
            </Button>
            <Button
              style={{ width: "100px" }}
              title="New Random Joke"
              onClick={() => {
                fetchRandomJoke();
              }}
            >
              <ImShuffle color={theme.LIGHT.buttonText} />
            </Button>
          </div>
        </div>
        <Logo />
      </Background>
    </div>
  );
}

export default App;
