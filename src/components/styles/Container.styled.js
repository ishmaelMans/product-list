import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 70%;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  background: ${({ theme }) => theme.color.Rose50};

  @media (max-width: 495px) {
    margin: 0 auto;
    padding: 20px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
`;

export default Container;
