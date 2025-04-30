import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import "./assets/global/global.scss";
import { store } from './app/store/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
