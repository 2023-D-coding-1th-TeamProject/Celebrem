import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';
import ProfilePage from '../ProfilePage/ProfilePage';
import { getFeed } from '../../apis/profile';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData([selectedTag]);
  }, [selectedTag]);
  console.log(selectedTag);

  const fetchData = async () => {
    try {
      const feedData = await getFeed(selectedTag);
      setUserData(feedData);
      console.log(feedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const handleTagSelect = tag => {
    setSelectedTag([tag]);
  };

  return (
    <>
      <Header />
      <Carousel />
      <MainTags selectedTag={selectedTag} onSelectTag={handleTagSelect} />
      <InfluencerList userList={userData} onUserClick={handleUserClick} />
      {selectedUser ? <ProfilePage user={selectedUser} /> : null} {/* 전달 */}
    </>
  );
};

export default HomePage;
