import styled from "styled-components";

const AddCartController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 2.8rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: #5f2e00;
  input {
    width: 70px;
    height: 50px;
    font-size: 1.8rem;
    text-align: center;
    box-sizing: border-box;
    margin-left: -5px;
  }
  button {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    height: 55px;
    line-height: 1;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default AddCartController;
