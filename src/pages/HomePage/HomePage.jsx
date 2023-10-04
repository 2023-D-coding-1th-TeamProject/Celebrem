import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';
import Sorting from '../../components/common/Sorting/Sorting';
import { getFeed } from '../../apis/profile';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [orderBy, setOrderBy] = useState('RANDOM');

  useEffect(() => {
    fetchData([selectedTag]);
  }, [selectedTag, orderBy]);
  console.log(selectedTag);

  const fetchData = async () => {
    try {
      const feedData = await getFeed(selectedTag, orderBy);
      setUserData(feedData);
      console.log(feedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagSelect = tag => {
    setSelectedTag([tag]);
  };

  const handleOrderBy = order => {
    setOrderBy(order);
  };

  return (
    <>
      <Header />
      <Carousel />
      <MainTags selectedTag={selectedTag} onSelectTag={handleTagSelect} />
      <Sorting onSelectOrder={handleOrderBy} orderType={orderBy} />
      <InfluencerList userList={userData} />
    </>
  );
};

export default HomePage;
