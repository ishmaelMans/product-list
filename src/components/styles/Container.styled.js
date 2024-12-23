import styled from "styled-components";

const Container = styled.div`
  font-family: "RedHatText-Regular";
  margin: 0 auto;
  max-width: 100%;
  width: 70%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 495px) {
    margin: 0 auto;
    padding: 20px 30px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
`;

export default Container;
