import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import "./pageContainer.scss";

function PageContainer() {
  return (
    <div>
      <div className="inside">
        <div className="figure-one"></div>
        <div className="figure-two"></div>
        <div className="figure-three"></div>

        <div className="container">
          <Header />
          <Navbar />

          <div className="outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
