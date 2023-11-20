import Login from "./login/page";
import Register from "./register/page";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Login />
      <Register />
    </div>
  )
}
