import React, { useContext, useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import JokeCard from "./components/JokeCard";
import Button from "./components/Button";
import useJoke from "./hooks/use-joke";
import { useTheme } from "./hooks/use-theme";
import { ImShuffle } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import Logo from "./components/Logo";
import toast, { toastConfig } from "react-simple-toasts";
import { ThemeContext } from "./context/theme-context";

function App() {
  const [joke, fetchRandomJoke] = useJoke();
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const theme = useTheme();

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
              style={{
                background: theme.card,
                marginRight: "10px",
              }}
              onClick={() => {
                setIsDarkTheme((prev) => !prev);
              }}
            >
              {isDarkTheme ? (
                <MdWbSunny size={24} color={theme.button} />
              ) : (
                <RiMoonClearFill size={24} color={theme.button} />
              )}
            </Button>
            <Button
              title="Copy to Clipboard"
              onClick={() => {
                navigator.clipboard.writeText(joke.data.joke).then(() => {
                  toast("Copied to Clipboard!");
                });
              }}
              style={{
                background: theme.card,
                marginRight: "10px",
              }}
            >
              <FaCopy size={20} color={theme.button} />
            </Button>
            <Button
              style={{ width: "100px" }}
              title="New Random Joke"
              onClick={() => {
                fetchRandomJoke();
              }}
            >
              <ImShuffle size={20} />
            </Button>
          </div>
        </div>
        <Logo />
      </Background>
    </div>
  );
}

export default App;
