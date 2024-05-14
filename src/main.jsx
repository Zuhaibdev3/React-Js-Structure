import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from './context/AppContext.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </Provider>
    </AppProvider>
  </React.StrictMode>,
)
