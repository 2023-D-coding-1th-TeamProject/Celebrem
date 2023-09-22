import React from 'react';
import USER from '../../assets/images/profile-img-s.svg';
import HEART from '../../assets/icons/icon-hearted.svg';
import UNHEART from '../../assets/icons/icon-unhearted.svg';
import ProfileTags from '../common/Tags/ProfileTags';
import PropTypes from 'prop-types';
import { UserLink, Image, Info, NickName, DetailInfo, Button } from './InfluencerListStyle';

const UserList = ({ userList }) => {
  return (
    <>
      {userList.map(user => (
        <UserLink to={`/profile/${user.influencerId}`} key={user.influencerId}>
          <Image>
            <img src={user.imageUrl ? user.imageUrl : USER} alt="유저" />
          </Image>
          <Info>
            <NickName>{user.nickname}</NickName>
            <DetailInfo>
              <span>{user.influencerId}</span>
              <span className="like-count">{user.likeCount}</span>
            </DetailInfo>
          </Info>
          <ProfileTags categories={user.tagNames} />
          <Button>
            <img src={user.like ? HEART : UNHEART} alt=" 아이콘" />
          </Button>
        </UserLink>
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
  onUserClick: PropTypes.func.isRequired,
};

export default UserList;
