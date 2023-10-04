import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import Profile from '../../components/Profile/Profile';
import { getProfile } from '../../apis/profile';

const ProfilePage = () => {
  const userId = useParams().influencerId;
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await getProfile(userId);
      setUserProfile(profileData);
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <Header />
      <Profile id={userId} profileData={userProfile} />
    </>
  );
};

export default ProfilePage;
