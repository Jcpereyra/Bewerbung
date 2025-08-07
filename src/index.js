import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PersonalProvider} from './apis/Personal';
import Footer from './components/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonalProvider>
      <App />
    </PersonalProvider>
  </React.StrictMode>
);
const foot = ReactDOM.createRoot(document.getElementById('footer'));
foot.render(
  <React.StrictMode>
    <PersonalProvider>
          <Footer />
      </PersonalProvider> 
       </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
