import React from "react";
import { ItemCount } from "../components/ItemCount/ItemCount";
import { PageList } from "../components/List/List";

export const ItemListContainer = () => {
  return (
    <>
      <PageList greeting="Landing Page Proyecto React" />
      <PageList greeting="SneakerShop" />
    </>
  );
};
