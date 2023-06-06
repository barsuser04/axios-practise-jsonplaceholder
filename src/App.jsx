import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { styled } from "styled-components";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function AppContent() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </Provider>
  );
}

export default App;
