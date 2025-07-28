import { useParams } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  return <div>Страница товара ID: {id}. Тут будет описание.</div>;
}