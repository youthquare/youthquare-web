import {createGlobalStyle, styled} from '../../styled-components';

export const Wrapper = styled.div`
  max-width: 640px;
  width: calc(100% - 2rem);
  margin: 0 auto;
`;
export const GlobalStyles = createGlobalStyle`
    fieldset {
        border: 0;
    }
    
    form {
        margin: 5rem 0 8rem;
    }
    
    #root__title + div {
        margin-top: 2rem;
    }
    
    button[type="submit"] {
        width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0;
    border: 0;
    background: #ff4040;
    color: #fff;
    padding: 1rem;
        font-size: 0;

      &:after {
        content: '완료';
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
    
    #root__title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .control-label,
    #root_comment_content__title,
    #root_link__title {
      font-size: 1.25rem;
      font-weight: 700;
      padding-top: 1.5rem;
    }
    
    .required {
      display: none;
    }
    
    .form-control {
      font: inherit;
      width: 100%;
      padding: 1rem .75rem;
      font-size: 1rem;
      box-sizing: border-box;
      border-radius: .25rem;
      border: 1px solid #b4b4b4;
      outline: 0;
      margin-top: .5rem;
      &:focus,
      &:active {
        border: 1px solid #ff4040;
      }
    }
    
    .field-array {
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
    
    i.glyphicon { display: none; }
    .btn-add::after { content: '+ 추가하기'; }
    .array-item-move-up::after { content: '↑'; }
    .array-item-move-down::after { content: '↓'; }
    .array-item-remove::after { content: 'X'; }
    
    .array-item {
      display: flex;
    }
    
    .btn-add {
        width: 100%;
    padding: 1rem;
    border-radius: .25rem;
    background: #fff;
    border: 2px solid #ff4040;
    color: #ff4040;
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    margin-top: .5rem;
    }
    
    .col-xs-9 {
      flex: 1 1 auto;
    }
    
    .btn-group {
      height: 100%;
      align-items: center;
      button {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: #ff4040;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        margin-left: .5rem;
      }
    }
`;
