import styled from "styled-components";

export const Form = styled.form`
    width:430px;
    height:560px;
    display:flex;
    flex-direction:column;
    background-color:white;
    border-radius:8px;
    padding:30px;
  

    h1{
      text-align:center;
      padding:10px;
    }

    button{
      padding:20px;
      margin-top:10px;
      font-size:20px;
      border:none;
      border-radius:10px;
      outline-none;
      cursor:pointer;
      font-weight:bold;
      text-transform:uppercase;
    }
    `;

export const InputDiv = styled.div`
display:flex;
flex-direction:column;
position:relative;

label{
  margin:7px 0;
  font-size:18px;
}


input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    outline: none;

  }
  span{
    color:red;
    position:absolute;
    margin-top:50px;
    left:0px;
    font-size:14px;
  }
`;
