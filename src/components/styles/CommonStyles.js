import styled from 'styled-components';

const StyledInput = styled.input`
width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledSubmit = styled.input`
    width: 100%;
    background-color: rgb(247, 184, 12);
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
    background-color: #f37a17;
  }
    &:disabled {
    background-color: gainsboro;
  }`;

 const StyledForm = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding:  40px;
`

const StyledDiv = styled.div`
    padding: 2%;
    padding-left: 20%;
    padding-right: 20%;
`

// const StyledNavLink = styled(NavLink)`
// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   borderRadius: 3,
//   border: 0,
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
// `

export {StyledForm, StyledInput, StyledSubmit, StyledDiv};