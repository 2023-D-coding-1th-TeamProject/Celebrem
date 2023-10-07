import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/common/Header/Header';
import Carousel from '../../components/common/Carousel/Carousel';
import Spinner from '../../components/common/Spinner/Spinner';
import MainTags from '../../components/common/Tags/MainTags';
import InfluencerList from '../../components/UserList/InfluencerList';
import Sorting from '../../components/common/Sorting/Sorting';
import { getFeed, getAllFeed } from '../../apis/profile';

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState('전체');
  const [orderBy, setOrderBy] = useState('RANDOM');
  const [page, setPage] = useState(1);

  const { data: userData, isLoading } = useQuery(
    ['feedData', selectedTag, orderBy, page],
    async () => {
      if (selectedTag === '전체') {
        return getAllFeed(page, orderBy);
      } else {
        return getFeed(selectedTag, page, orderBy);
      }
    },
  );

  const handleTagSelect = tag => {
    setSelectedTag(tag);
  };

  const handleOrderBy = order => {
    setOrderBy(order);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <>
      <Header />
      <Carousel />
      <MainTags selectedTag={selectedTag} onSelectTag={handleTagSelect} />
      <Sorting onSelectOrder={handleOrderBy} orderType={orderBy} />
      {isLoading ? <Spinner /> : userData && <InfluencerList userList={userData} />}

      {/* 페이지 번호 UI 요소 */}
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          이전 페이지
        </button>
        <span>페이지 {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>다음 페이지</button>
      </div>
    </>
  );
};

export default HomePage;
