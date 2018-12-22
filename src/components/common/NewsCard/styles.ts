import {styled} from '../../../styled-components';
import {ReactComponent as SVGQuoteIcon} from '../../../assets/quote.svg';

export const NewsCardWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  background: #fff;
  display: flex;
  min-height: 80vh;
  overflow: hidden;
  position: relative;
  word-break: keep-all;
  margin-bottom: 2rem;
`;

export const ImageSection = styled.div`
  width: 35%;
  padding: 2rem;
  box-sizing: border-box;
  background-size: 90vw;
  background-position: center;
  background-image: url('${(props: { image: string }) => props.image}');
  position: relative;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  flex: 0 0 auto;
  transition: background-size .25s ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0) 50%,rgba(0,0,0,0.6));
  }
  
  & > div {
    z-index: 1;
  }
  
  &:hover {
    h1 {
      text-decoration: underline;
    }
    background-size: 100vw;
  }
`;

export const ImageSectionTitle = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
`;

export const ReadState = styled.p`
  color: #d0d0d0;
  font-size: .75rem;
  margin-bottom: 1rem;
`;

export const CategoryTag = styled.p`
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background: #ff4040;
  flex: 0 0 auto;
  padding: .125rem .5rem;
  border-radius: 5rem;
`;

export const ContentSection = styled.div`
  flex: 1 1 auto;
  background: #fff;
  padding: 2rem;
`;

export const QuoteIcon = styled(SVGQuoteIcon)`
  width: 1rem;
  height: 1rem;
  display: block;
  margin-bottom: .5rem;
`;

export const QuoteSection = styled.div`
  color: #b4b4b4;
  font-size: 1.125rem;
  width: 90%;
  box-sizing: border-box;
  border-left: .125rem solid #b4b4b4;
  padding-left: 1rem;
`;

export const ArgumentSectionTitle = styled.p`
  font-weight: 700;
  color: #5a5a5a;
  font-size: 1rem;
  margin-top: 4.5rem;
`;

export const Arglist = styled.div`
  margin-top: 1.25rem;
  
  * {
    text-decoration: none;
  }
`;
export const CreateButton = styled.div`
  background: #fff;
  border-radius: .25rem;
  border: .125rem solid #d0d0d0;
  width: 100%;
  color: #ff4040;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  text-decoration: none;
  transition: border .2s ease-in-out;
  &:hover {
    border: .125rem solid #ff4040;
  }
  a {
    text-decoration: none;
  }
  
`;
