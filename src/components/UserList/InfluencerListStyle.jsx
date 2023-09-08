import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COMMENTHEART from '../../assets/icons/icon-comment-hearted.svg';

const UserLink = styled(Link)`
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 2.8fr 0.6fr;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 7rem;
    height: 7rem;
  }
`;

const Info = styled.p`
  display: flex;
  flex-direction: column;
`;

const NickName = styled.span`
  font-size: ${({ theme }) => theme.fonts.md};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.gray400};
`;

const DetailInfo = styled.p`
  .like-count {
    background: url(${COMMENTHEART}) center center / 10px 10px no-repeat;
    padding-left: 2.8rem;
    padding-bottom: 2px;
  }
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fonts.s};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export { UserLink, Image, Info, NickName, DetailInfo, Button };
