import styled from 'styled-components';
import bannerImg from '../image/banner.png';

export const BannerMenu = styled.div `
  height: 210px;
  width: 100%;
  background-image: url(${bannerImg});
  position: relative;
  background-position: center;
  background-size: cover;
`;