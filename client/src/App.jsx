import AllRoutes from "./AllRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Email from "./components/footer/Email";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
