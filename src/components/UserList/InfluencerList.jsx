import React from 'react';
import USER from '../../assets/images/profile-img-s.svg';
import HEART from '../../assets/icons/icon-hearted.svg';
import ProfileTags from '../common/Tags/ProfileTags';
import PropTypes from 'prop-types';
import { User, Image, Info, NickName, DetailInfo, Button } from './InfluencerListStyle';

const UserList = ({ userList }) => {
  return (
    <>
      {userList.map(user => (
        <User key={user.id}>
          <Image>
            <img src={USER} alt="유저" />
          </Image>
          <Info>
            <NickName>{user.userName}</NickName>
            <DetailInfo>
              <span>{user.instagramId}</span>
              <span className="like-count">{user.likeCount}</span>
            </DetailInfo>
          </Info>
          <ProfileTags categories={user.category} />
          <Button>
            <img src={HEART} alt="찜하기" />
          </Button>
        </User>
      ))}
    </>
  );
};

UserList.propTypes = {
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      instagramId: PropTypes.string.isRequired,
      likeCount: PropTypes.number.isRequired,
      isLiked: PropTypes.bool.isRequired,
      category: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default UserList;
