import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';
import Sorting from '../../components/common/Sorting/Sorting';
import { getFeed } from '../../apis/profile';
import { getAllFeed } from '../../apis/profile';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [orderBy, setOrderBy] = useState('RANDOM');

  const fetchData = async () => {
    try {
      const feedData = await getFeed(selectedTag, orderBy);
      setUserData(feedData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFeed = async () => {
    try {
      const alllFeedData = await getAllFeed(orderBy);
      setUserData(alllFeedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedTag === '전체') {
      fetchFeed();
    } else {
      fetchData();
    }
  }, [selectedTag, orderBy]);

  const handleTagSelect = tag => {
    setSelectedTag(tag);
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
      {userData && <InfluencerList userList={userData} />}
    </>
  );
};

export default HomePage;
