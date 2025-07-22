import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

export default async function ProductsPage() {
  const products = await getData();

  return (
    <div>
      {products.map((p: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
