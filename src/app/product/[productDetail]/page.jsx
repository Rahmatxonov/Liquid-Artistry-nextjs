import { notFound } from "next/navigation";

export default function ProductDetail(params) {
  if (params.ProductDetail >= 100) {
    notFound("product");
  }
  return <div>ProductDetail page{params.ProductDetail}</div>;
}
