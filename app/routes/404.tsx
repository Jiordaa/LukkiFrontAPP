import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404</h2>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
