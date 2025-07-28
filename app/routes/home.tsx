//import { Welcome } from "../welcome/welcome";

//export default function Home() {
  //return <Welcome />;
//}


// export default function Home() {
//   return <div>Главная страница магазина. Тут будет лендинг.</div>;
// }


// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main style={{ padding: "2rem", backgroundColor: "#111", color: "#fff", minHeight: "100vh" }}>
//         <h1>Главная страница</h1>
//       </main>
//     </>
//   );
// }


// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <nav>
//         <Link to="/account">Account</Link> |{" "}
//         <Link to="/cart">Cart</Link> |{" "}
//         <Link to="/favorites">Favorites</Link> |{" "}
//         <Link to="/search">Search</Link>
//       </nav>
//     </div>
//   );
// }

// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-neutral-900 text-white min-h-screen p-6">
//         <h1 className="text-4xl font-bold mb-6">Добро пожаловать в магазин Lukki!</h1>
//         <p className="mb-4 text-gray-300">Выберите один из разделов ниже:</p>
//         <nav className="space-x-6">
//           <Link to="/account" className="text-blue-400 hover:underline">Аккаунт</Link>
//           <Link to="/cart" className="text-blue-400 hover:underline">Корзина</Link>
//           <Link to="/favorites" className="text-blue-400 hover:underline">Избранное</Link>
//           <Link to="/search" className="text-blue-400 hover:underline">Поиск</Link>
//         </nav>
//       </main>
//     </>
//   );
// }


// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-white min-h-screen flex items-center justify-center p-0">
//         <img
//           src="/logo.jpg"
//           alt="Lukki Logo"
//           className="max-w-full max-h-screen object-contain"
//           style={{ width: "100vw", height: "100vh" }}
//         />
//       </main>
//     </>
//   );
// } рабочий 1

// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-white min-h-screen flex flex-col items-center p-0">
//         <img
//           src="/logo.jpg"
//           alt="Lukki Logo"
//           className="max-w-full object-contain"
//           style={{ width: "100vw", height: "calc(100vh - 150px)" }}
//         />

//         {/* Зеленый прямоугольник */}
//         <div
//           style={{
//             backgroundColor: "#2C3C18",
//             width: "100%",
//             maxWidth: 1920,
//             height: 150,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "0 20px",
//             boxSizing: "border-box",
//           }}
//         >
//           {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 backgroundColor: "#fff",
//                 flex: 1,
//                 margin: "0 10px",
//                 height: 100,
//                 borderRadius: 8,
//               }}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// } рабочий с блоком с логотипами(изьебнулась картинка)






// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-white min-h-screen flex flex-col items-center p-0">
//         <div style={{ width: "100vw", overflow: "hidden" }}>
//           <img
//             src="/logo.jpg"
//             alt="Lukki Logo"
//             style={{
//               width: "100vw",
//               height: "auto",
//               display: "block",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             backgroundColor: "#2C3C18",
//             width: "100%",
//             maxWidth: 1920,
//             height: 150,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "0 20px",
//             boxSizing: "border-box",
//           }}
//         >
//           {/* {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 backgroundColor: "#fff",
//                 flex: 1,
//                 margin: "0 10px",
//                 height: 100,
//                 borderRadius: 8,
//               }}
//             />
//           ))} */}

          

//         </div>
//       </main>
//     </>
//   );
// }


import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen flex flex-col items-center p-0">
        <div style={{ width: "100vw", overflow: "hidden" }}>
          <img
            src="/logo.jpg"
            alt="Lukki Logo"
            style={{
              width: "100vw",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "#2C3C18",
            width: "100%",
            maxWidth: 1920,
            height: 150,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <div style={boxStyle} />
          <div style={boxStyle} />
          <div style={boxStyle} />
          <div style={boxStyle} />
          <div style={boxStyle} />
        </div>
      </main>
    </>
  );
}

const boxStyle = {
  backgroundColor: "#fff",
  width: "300px",
  height: "100px",
  borderRadius: 8,
};








