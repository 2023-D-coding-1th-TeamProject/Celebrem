import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';
import ProfilePage from '../ProfilePage/ProfilePage';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const filteredUserData =
    selectedTag === '전체'
      ? userData
      : userData.filter(user => user.category.includes(selectedTag));

  return (
    <>
      <Header />
      <Carousel />
      <MainTags selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <InfluencerList userList={filteredUserData} onUserClick={handleUserClick} />
      {selectedUser ? <ProfilePage user={selectedUser} /> : null} {/* 전달 */}
    </>
  );
};

export default HomePage;
