import styled, {keyframes} from 'styled-components';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as AppStoreLogo} from '../../assets/appstore.svg';

const Gradient = keyframes`
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;
export const Wrapper = styled.div`
  background: linear-gradient(-45deg, #ff4040, #ff4157, #ff4040, #ff593b);
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const YouthquareLogo = styled(Logo)`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;

export const LogoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GooglePlay = styled.img`
  width: 10rem;
`;

export const Appstore = styled(AppStoreLogo)`
  height: 2.5rem;
  width: 8.125rem;
`;

export const Slogan = styled.h1`
  font-weight: 100;
  font-size: 2.75rem;
  color: #fff;
  margin-top: .5rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: .25rem;
  padding: 3rem 3.5rem 2.5rem;
`;

export const Divider = styled.div`
  height: 1px;
  overflow: visible;
  background: #d3d3d3;
  color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  position: relative;
  font-size: .875rem;
  
  &:before {
    content: '계정이 없으신가요?';
    padding: 0 .5rem;
    background: #fff;
  }
`;
