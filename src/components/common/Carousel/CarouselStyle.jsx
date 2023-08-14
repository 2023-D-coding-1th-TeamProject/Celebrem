import styled from 'styled-components';

const CarouselStyle = styled.article`
  width: 100%;
  position: relative;
  button {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.opacity};
    border-radius: 50%;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 5px ${({ theme }) => theme.colors.gray100};
  img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  transition: transform 0.2s ease;
`;

const PrevButton = styled.button`
  left: 5%;
`;

const NextButton = styled.button`
  right: 5%;
`;

const Chapter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  right: 10%;
  padding: 1.5rem 1.5rem;
  border-radius: 2rem;
  font-size: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.opacity};
`;

export { CarouselStyle, Wrapper, Image, Chapter, PrevButton, NextButton };
