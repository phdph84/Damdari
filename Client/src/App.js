
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme} from '@mui/material/styles';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from 'scenes/dashboard/dashboard';
import Layout from 'scenes/Layout/Layout';
import Customers from 'scenes/customers/Customers'
import TolidMesl from "scenes/tolidMesl/TolidMesl";
import Salamat from "scenes/salamat/Salamat";
function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
   
    <div className="app">
      <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to="/dashboard" replace/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/tolidmesl" element={<TolidMesl/>}/>
          <Route path="/salamat" element={<Salamat/>}/>
        </Route>
      </Routes>
    </ThemeProvider> 
    </BrowserRouter>
    </div>
  );
}

export default App;
