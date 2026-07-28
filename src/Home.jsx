import styled from "styled-components";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { initialListItem } from "./listItem";

const HomeContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }

  a {
    color: #a15814;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 1em;
    padding: 0.25em 1em;

    &:hover {
      opacity: 0.8;
    }
  }
`;

function Home() {
  const [listItem, setListItem] = useState(initialListItem);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListItem() {
      try {
        const promises = initialListItem.map(async (shopItem, index) => {
          const response = await fetch(
            "https://fakestoreapi.com/products/" + (index + 1),
          );
          console.log(response);

          if (response.status >= 500) {
            throw new Error("Server error");
          } else if (response.status >= 400) {
            throw new Error("Client error");
          } else if (!response.ok) {
            throw new Error("Request failed");
          }

          const ItemData = await response.json();

          return {
            ...shopItem,
            title: ItemData.title,
            price: ItemData.price,
            description: ItemData.description,
            imgSrc: ItemData.image,
          };
        });

        const updatedList = await Promise.all(promises);

        setListItem(updatedList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchListItem();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log(listItem);

  return (
    <HomeContainer>
      <h1>Hello from home page!</h1>
      <p>So, how are you?</p>
      <Link to="shop">Shop Now</Link>
    </HomeContainer>
  );
}

export default Home;
