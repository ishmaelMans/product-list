import Container from "./styles/Container.styled";
import data from "../data.json";
import { useState } from "react";

import {
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
} from "./styles/Body.styled";

const Body = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState(data);

  const removeItem = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          setCartCount(() => cartCount - product.quantity);
          return { ...product, quantity: 0, isInCart: false };
        }
        return product;
      })
    );
    setCartList(cartList.filter((item) => item.id !== productId));
  };

  const addToCart = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          setCartCount(cartCount + 1);
          setCartList([...cartList, { ...product, quantity: 1 }]);
          return { ...product, isInCart: true, quantity: 1 };
        }
        return product;
      })
    );
  };

  const increment = (productId) => {
    // setProducts create a new array products
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          setCartCount(cartCount + 1);
          setCartList(
            cartList.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };

  const totalQuantity = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const confirmOrder = () => {
    setIsClicked(true);
  };

  const newOrder = () => {
    setIsClicked(false);
    setProducts(
      products.map((product) => {
        return { ...product, quantity: 0, isInCart: false };
      })
    );
    setCartList([]);
    setCartCount(0);
  };

  const decrement = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            setCartCount(cartCount - 1);
            setCartList(
              cartList.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            );
            return { ...product, quantity: product.quantity - 1 };
          } else if (product.quantity === 1) {
            setCartCount(cartCount - 1);
            setCartList(cartList.filter((item) => item.id !== productId));
            return { ...product, quantity: 0, isInCart: false };
          }
        }
        return product;
      })
    );
  };

  return (
    <Container>
      <Products>
        <h1>Desserts</h1>
        {products.map((product) => {
          return (
            <Product key={product.id}>
              <ProductImg src={product.image.desktop} alt="product" />
              {!product.isInCart ? (
                <AddCartButton onClick={() => addToCart(product.id)}>
                  <button>Add to Cart</button>
                </AddCartButton>
              ) : (
                <IncrementButton>
                  <svg
                    onClick={() => decrement(product.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                  >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                  <span>{product.quantity}</span>
                  <svg
                    onClick={() => increment(product.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      fill="#fff"
                      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                  </svg>
                </IncrementButton>
              )}
              <ProductTitle>
                <p>{product.category}</p>
                <h4>{product.name}</h4>
                <span>${product.price.toFixed(2)}</span>
              </ProductTitle>
            </Product>
          );
        })}
      </Products>

      <YourCart>
        <h3>
          Your Cart(
          {cartCount})
        </h3>
        {cartCount > 0 ? (
          cartList.map((item) => (
            <CartList key={item.id}>
              <h4>{item.name}</h4>
              <span>{item.quantity}x</span>
              <span>@${item.price.toFixed(2)}</span>
              <span>${item.price.toFixed(2) * item.quantity.toFixed(2)}</span>
              <img
                onClick={() => removeItem(item.id)}
                src="./assets/images/icon-remove-item.svg"
                alt="remove_icon"
              />
            </CartList>
          ))
        ) : (
          <DefaultList>
            <img
              src="./assets/images/illustration-empty-cart.svg"
              alt="Empty cart"
            />
            <p>Your Added items will apear here</p>
          </DefaultList>
        )}
        {cartCount > 0 ? (
          <ConfirmOrder>
            <div>
              <span>Order Total</span>
              <h4>${totalQuantity.toFixed(2)}</h4>
            </div>
            <p>
              This is a <span>carbon-neutral</span> delivery
            </p>
            <button onClick={confirmOrder}>Confirm Order</button>
          </ConfirmOrder>
        ) : (
          " "
        )}
      </YourCart>

      {isClicked ? (
        <OrderConfirmed>
          <div>
            <img src="./assets/images/icon-order-confirmed.svg" alt="" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food</p>
            {cartList.map((item) => (
              <OrderList key={item.id}>
                <FlexLeft>
                  <img src={item.image.desktop} alt="" />
                  <Flex>
                    <h6>{item.name}</h6>
                    <FlexLeft>
                      <span>{item.quantity}x</span>
                      <span>@${item.price.toFixed(2)}</span>
                    </FlexLeft>
                  </Flex>
                </FlexLeft>
                <FlexRight>
                  <p>${item.price.toFixed(2) * item.quantity.toFixed(2)}</p>
                </FlexRight>
              </OrderList>
            ))}
            <Total>
              <span>Order Total</span>
              <h4>${totalQuantity.toFixed(2)}</h4>
            </Total>
            <button onClick={newOrder}>Start New Order</button>
          </div>
        </OrderConfirmed>
      ) : (
        ""
      )}
    </Container>
  );
};
export default Body;
