import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import styled from "styled-components";
import InputForm from "./components/InputForm";
import PercentagesDisplay from "./components/PercentagesDisplay";
import ThemeToggleButton from "./components/ThemeToggleButton";

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const [showPercentages, setShowPercentages] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  const toggleDisplay = () => {
    const updatedDisplay = showPercentages ? false : true;
    setShowPercentages(updatedDisplay);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <ThemeToggleButton
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <Title>Obliczator procentów!</Title>

        {showPercentages ? (
          <PercentagesDisplay
            toggleDisplay={toggleDisplay}
            totalPoints={totalPoints}
          ></PercentagesDisplay>
        ) : (
          <InputForm
            toggleDisplay={toggleDisplay}
            setPoints={setTotalPoints}
          ></InputForm>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
