import { Outlet } from "react-router";
import GlobalStyles from "./GlobalStyles";
import Container from "./Container";
import { Navigation } from "./Nav";
import { useState, useEffect } from "react";
import { initialListItem } from "./initialItem";

export default function RootLayout() {
  const [listItem, setListItem] = useState(initialListItem);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListItem() {
      try {
        const promises = initialListItem.map(async (shopItem) => {
          const response = await fetch(
            "https://fakestoreapi.com/products/" + shopItem.id,
          );

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

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navigation listItem={listItem} />
      </Container>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>A network error was encountered</p>
      ) : (
        <Outlet context={[listItem, setListItem]} />
      )}
    </>
  );
}
