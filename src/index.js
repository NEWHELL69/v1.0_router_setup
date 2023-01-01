import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Intro = lazy(() => import('./routes/intro'));
const ErrorPage = lazy(() => import('./error-page'));
const Login = lazy(() => import('./routes/login'));
const Home = lazy(() => import('./routes/home'));
const CreateAccount = lazy(() => import('./routes/createAccount'));
const Search = lazy(() => import('./routes/search'));
const Sell = lazy(() => import('./routes/sell'));
const Chat = lazy(() => import('./routes/chat'));
const Account = lazy(() => import('./routes/account'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="search" element={<Search />} />
        <Route path="sell" element={<Sell />} />
        <Route path="chat" element={<Chat />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </Suspense>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
