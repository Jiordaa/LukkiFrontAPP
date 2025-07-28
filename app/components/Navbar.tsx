// import { Link } from "react-router-dom";
// import { Search, User, Heart, ShoppingCart } from "lucide-react";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo-placeholder" />
//       <div className="icons">
//         <Link to="/search"><Search /></Link>
//         <Link to="/account"><User /></Link>
//         <Link to="/favorites"><Heart /></Link>
//         <Link to="/cart"><ShoppingCart /></Link>
//       </div>
//     </nav>
//   );
// }


// import { Search, Heart, ShoppingCart, User } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="navbar bg-black text-white px-6 py-4 flex justify-between items-center">
//       <div
//         className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-2"
//         style={{ cursor: "pointer" }}
//       >
//         <img src="/logo.jpg" alt="Logo" className="w-14 h-14 rounded-full object-cover" />
//       </div>

//       <div className="flex gap-6 text-2xl">
//         <IconWrapper>
//           <Search />
//         </IconWrapper>
//         <IconWrapper>
//           <Heart />
//         </IconWrapper>
//         <IconWrapper>
//           <ShoppingCart />
//         </IconWrapper>
//         <IconWrapper>
//           <User />
//         </IconWrapper>
//       </div>
//     </nav>
//   );
// }

// function IconWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer">
//       {children}
//     </div>
//   );
// }


import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div
        className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-2"
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? "/logo_small_green.png" : "/logo_small_white.png"}
          alt="Logo"
          className="w-14 h-14 object-contain transition duration-300"
        />
      </div>

      <div className="flex gap-6 text-2xl">
        <IconWrapper>
          <Search />
        </IconWrapper>
        <IconWrapper>
          <Heart />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCart />
        </IconWrapper>
        <IconWrapper>
          <User />
        </IconWrapper>
      </div>
    </nav>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer">
      {children}
    </div>
  );
}

