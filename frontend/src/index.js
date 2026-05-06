import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './Auth'
import { BrowserRouter } from 'react-router-dom';

function Root() {
  const [isAuth, setIsAuth] = useState(false); // false = not yet authenticated

  return (
    <BrowserRouter>
      {isAuth ? <App /> : <Auth setIsAuth={setIsAuth} />}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

