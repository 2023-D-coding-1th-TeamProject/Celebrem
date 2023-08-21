import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedTag, setSelectedTag] = useState('전체');

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

  // 인플루언서 태그 필터링
  const filteredUserData =
    selectedTag === '전체'
      ? userData
      : userData.filter(user => user.category.includes(selectedTag));

  return (
    <>
      <Header />
      <Carousel />
      <MainTags selectedTag={selectedTag} onSelectTag={setSelectedTag} />
      <InfluencerList userList={filteredUserData} />
    </>
  );
};

export default HomePage;
