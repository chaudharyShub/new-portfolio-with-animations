import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./Components/Context/reducer";
import AOS from 'aos';
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import Element from './Components/Routing/Element';
import './App.css';
import { disableTopLoadingBar, topLoadingBarInitialState } from "./Components/Context/topLoadingBarDisableReducer";

export const StateContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [topLoadingBarState, topLoadingBarDispatch] = useReducer(disableTopLoadingBar, topLoadingBarInitialState);

  const enableDarkMode = () => dispatch('ENABLE_DARK_MODE');
  const disableDarkMode = () => dispatch('DISABLE_DARK_MODE');

  const setModeInLocalStorage = mode => {
    if (mode === 'true') enableDarkMode();
    else disableDarkMode();
  }

  const getModeFromLocalStorage = () => {
    const mode = localStorage.getItem('mode');
    if (mode === null) localStorage.setItem('mode', false);
    else setModeInLocalStorage(mode);
  }

  const value = {
    state,
    enableDarkMode,
    disableDarkMode,

    topLoadingBarState,
    topLoadingBarDispatch
  }

  useEffect(() => {
    getModeFromLocalStorage();
  }, [state.mode]);

  useEffect(() => {
    AOS.init({
      animatedClassName: 'aos-animate',
      duration: 700,
      easing: 'ease',
      once: true,
      debounceDelay: 80,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <StateContext.Provider value={value}>
      <div className="app_main_outer" style={{ background: state.style.background }}>
        <Navbar />
        <div className="app_main">
          <Element />
        </div>
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;
