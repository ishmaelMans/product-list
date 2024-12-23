import styled from "styled-components";

const Products = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto);
  gap: 20px;

  h1 {
    grid-column: 1/4;
  }

  @media (max-width: 495px) {
    width: 100%;
    max-width: 450px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(auto);
    gap: 20px;
    margin-bottom: 25px;
    background-color: ${({ theme }) => theme.color.Rose50};

    h1 {
      grid-column: 1/1;
    }
  }
`;

const Product = styled.div`
  position: relative;
  display: flex;

  //   justify-content: center;
  //   align-items: center;
  flex-direction: column;
  //   text-align: left;
  //   background-color: ${({ theme }) => theme.color.white};
`;

const ProductTitle = styled.div`
  margin: -35px 0 0 0;

  p {
    color: ${({ theme }) => theme.color.Rose300};
    font-size: 12px;
    margin-bottom: 5px;
  }

  h4 {
    margin: 5px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.color.Rose900};
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.red};
  }
`;

const ProductImg = styled.img`
  border-radius: 10px;
  margin-bottom: 30px;
`;

const AddCartButton = styled.div`
  display: flex;
  //   position: absolute;
  user-select: none;
  justify-content: center;
  transform: translateY(-50px);
  align-items: center;
  margin: 0 25px;
  border-radius: 20px;
  padding: 6px 8px;
  background-color: #fff;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
    border-color: red;
  }

  &::before {
    content: "";
    background-image: url("./assets/images/icon-add-to-cart.svg");
    background-repeat: no-repeat;
    left: 5px;
    top: 0;
    width: 20px;
    height: 20px;
  }

  button {
    font-size: 0.7rem;
    font-weight: 700;
    padding-left: 5px;
    background: none;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
`;
const IncrementButton = styled.div`
display: flex;
user-select: none;
    // position: absolute;
  transform: translateY(-50px);
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  margin: 0 35px;
  border-radius: 20px;
  padding: 6px 10px;
  border: 1px solid #000;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.red};

  svg {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      padding: 1px;
      border: 1px solid ${({ theme }) => theme.color.grey};

      &:hover {
      cursor: pointer;
      background-color: #fff;
      fill: #000;

      &:hover path{
      fill: ${({ theme }) => theme.color.red};
      }
  }
`;

const YourCart = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 200px;
  padding: 20px;
  margin-left: 20px;
  border-radius: 20px;

  h3 {
    color: ${({ theme }) => theme.color.red};
    margin-bottom: 25px;
  }

  @media (max-width: 495px) {
    margin-left: 0;
    padding: 0;
    width: 100%;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(auto);
    gap: 20px;
  }
`;

const ConfirmOrder = styled.div`

    display: flex;
    flex-direction: column;
    font-size: 13px;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0;
      }

      p {
        position: relative;
      color: ${({ theme }) => theme.color.Rose500};
      text-align: center;
      margin-bottom: 20px;
      padding: 15px 0 15px 20px;
      font-size: 11px;
      background-color: ${({ theme }) => theme.color.Rose100}; 

      &::before{
      content: "";
      background-image: url("./assets/images/icon-carbon-neutral.svg");
      position: absolute;
      left: 37px;
      top: 10px;
      width: 21px;
      height: 21px;
      }

      span {
      color: #000;
      }
    }
    button {
      cursor: pointer;
      color: #fff;
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.color.red};
      padding: 10px 0;
      border-radius: 20px;
    }
  }
`;

const CartList = styled.div`
  display: block;
  position: relative;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
  font-size: 12px;
  padding-bottom: 10px;

  h4 {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.Rose200};
  }

  span:first-of-type {
    color: ${({ theme }) => theme.color.red};
    font-size: 13px;
    font-weight: bold;
  }

  span {
    padding-right: 15px;
    color: ${({ theme }) => theme.color.Rose500};
  }

  img {
    position: absolute;
    height: 10px;
    width: 10px;
    right: 0;
    top: 14px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.grey};

    &:hover {
      cursor: pointer;
    }
  }
`;

const DefaultList = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: block;
    margin: 10px auto 10px auto;
    width: 100px;
    height: 100px;
  }

  p {
    font-size: 12px;
    text-align: center;
  }
`;

const OrderConfirmed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  div {
    background-color: ${({ theme }) => theme.color.Rose50};
    border-radius: 7px;
    padding: 30px !important;

    h2 {
      margin-bottom: 5px;
    }

    img {
      width: 30px;
      height: 30px;
    }

    p {
      font-size: 12px;
      margin-bottom: 20px;
    }

    @media (max-width: 495px) {
    }
  }

  button {
    cursor: pointer;
    color: #fff;
    outline: none;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.red};
    padding: 10px 0;
    border-radius: 20px;
  }
`;

const OrderList = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.color.Rose100} !important;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 250px;
  border-radius: 5px;
  padding: 10px !important;

  span {
    display: block;
    font-size: 10px;
    font-weight: bold;
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const Flex = styled.section`
  display: flex;
  flex-direction: column;

  h6 {
    margin-bottom: 5px;
  }
`;
const FlexLeft = styled.section`
  display: flex;
  flex-direction: row;

  span:first-of-type {
    color: ${({ theme }) => theme.color.red};
    padding-right: 7px;
  }
`;
const FlexRight = styled.section`
  display: flex;
  flex-direction: row;

  p {
    font-size: 10px;
    font-weight: bold;
  }
`;

const Total = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.Rose100} !important;
  padding: 10px;
  font-size: 11px;
  border-radius: 5px;
  margin-bottom: 20px;

  h4 {
    font-size: 14px;
  }
`;

export {
  Products,
  Product,
  ProductImg,
  AddCartButton,
  IncrementButton,
  ProductTitle,
  YourCart,
  CartList,
  DefaultList,
  ConfirmOrder,
  OrderConfirmed,
  OrderList,
  FlexLeft,
  FlexRight,
  Flex,
  Total,
};
