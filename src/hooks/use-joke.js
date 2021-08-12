import axios from "axios";
import { useState } from "react";

const initialState = {
  data: null,
  isLoading: true,
  error: null,
};

const useJoke = () => {
  const [joke, setJoke] = useState(initialState);

  const fetchRandomJoke = async () => {
    try {
      const { data } = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setJoke((prev) => ({ ...prev, isLoading: false }));
      setJoke((prev) => ({ ...prev, data }));
    } catch (error) {
      setJoke((prev) => ({ ...prev, error: error.message }));
    }
  };

  return [joke, fetchRandomJoke];
};
export default useJoke;
