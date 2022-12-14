import React, { createContext, useReducer } from "react";
import './App.css';
import { initialState, reducer } from "./Components/Context/reducer";
import { darkModeStyle } from "./Components/Details";
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import Element from './Components/Routing/Element';

export const StateContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const enableDarkMode = () => {
    dispatch({
      type: 'ENABLE_DARK_MODE',
      payload: darkModeStyle
    });
  }

  const disableDarkMode = () => {
    dispatch({
      type: 'DISABLE_DARK_MODE'
    });
  }

  const value = {
    state,
    enableDarkMode,
    disableDarkMode
  }

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
