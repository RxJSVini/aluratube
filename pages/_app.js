import React from "react";
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import ColorModeProvider,{ ColorModeContext } from "../src/contexts/ColorModeProvider";
import RegisterVideo from "../src/components/RegisterVideo";




const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    },
  };


  // _App.js - definições globais do NextJS
// ThemeProvider - Prover o tema para a app toda
// ColorModeProvider - Prove o state de light ou dark mode para todo mundo


function ProviderWrapper(props) {

  const dataLocal = new Date().toLocaleTimeString('America', {hourCycle:"h11"})


  return (
  <ColorModeProvider initialMode={dataLocal.includes("PM") ? 'dark':'light'}>
      {props.children}
  </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {

  const { mode } = useContext(ColorModeContext);

  return (
      <ThemeProvider theme={theme[mode]}>
        <CSSReset />
        <Component {...pageProps} />
        <RegisterVideo/>
      </ThemeProvider>

  );
}


export default function _App(props){
    return (
        <ProviderWrapper>
            <MyApp {... props}/>
        </ProviderWrapper>
    )
}

