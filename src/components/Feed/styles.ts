import {ReactComponent as AppLogo} from '../../assets/logo.svg';
import {ReactComponent as SVGNotifyIcon} from '../../assets/notification.svg';
import {ReactComponent as SVGSettingIcon} from '../../assets/setting.svg';
import styled from 'styled-components';

export const Youthquare = styled(AppLogo)`
  width: 3rem;
  height: 3rem;
  
  path {
    fill: #ff4040;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  color: #222222;
  margin-top: 1rem;
`;

export const Date = styled.p`
  font-size: 1.125rem;
  margin-top: .5rem;
  color: #222222;
`;

export const TitleHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const NotifyIcon = styled(SVGNotifyIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const SettingIcon = styled(SVGSettingIcon)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const IconHolder = styled.div`
  margin-top: 4.5rem;
`;

export const ActionButton = styled.button`
  appearance: none;
  border: 0;
  margin: 0;
  
  position: relative;
  &:before  {
    content: '';
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    top: 50%;
    left: 50%;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    width: 0;
    height: 0;
    border-radius: 50%;
    z-index: 0;
    opacity: 0;
    transition: width .2s ease-in-out, height .2s ease-in-out, opacity .1s ease-in-out;
  }
  &:hover:before {
    width: 2.5rem;
    height: 2.5rem;
    opacity: 1;
  }
  svg {
    position: relative;
    z-index: 1;
  }
`;
