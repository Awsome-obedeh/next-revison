"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Products from "@/components/Products";
import ProductList from "@/components/ProductList";



export default function Home() {
 
  return (

    <>
    <Products
  name="obed"
  sex="M"
  complexion="D"
  marital="S"
    
    />

   
    <hr />
    <Products
      name="miss sola"
      sex="F"
      complexion={'fair'}
      marital="S"
    />
    <hr />
    <Products
      name="Mr john"
      sex="M"
      complexion={'fair'}
      marital="S"
    />
    <hr />
    <Products
      name="Mr Leonard"
      sex="M"
      complexion={'dark'}
      marital="S"
    />
    
    <ProductList/>
    </>
  );
}
