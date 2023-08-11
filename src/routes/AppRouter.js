import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';

import SearchPage from '../pages/SearchPage/SearchPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import AccountEditPage from '../pages/AccountPage/AccountEdit/AccountEditPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ChatListPage from '../pages/ChatPage/ChatListPage/ChatListPage';
import ChatRoomPage from '../pages/ChatPage/ChatRoomPage/ChatRoomPage';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage">
          <Route index element={<AccountPage />} />
          <Route path="edit" element={<AccountEditPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/:accountname" element={<ChatRoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
