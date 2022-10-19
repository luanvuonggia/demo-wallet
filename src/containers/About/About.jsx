import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrimaryLayout } from "components/Layout";
const members = [
  {
    name: "Linh Tran",
    email: "linhtran@example.net",
  },
  {
    name: "Hoang Nguyen",
    email: "hoangnguyen@example.net",
  },
  {
    name: "Nhi Thai",
    email: "nhithai@example.net",
  },
  {
    name: "Dung Nguyen",
    email: "dungnguyen@example.net",
  },
  {
    name: "Liem Do",
    email: "liemdo@example.net",
  },
  {
    name: "Duy Phan",
    email: "duyphan@example.net",
  },
  {
    name: "Diem Nguyen",
    email: "diemnguyen@example.net",
  },
  {
    name: "Tu Bui",
    email: "tubui@example.net",
  },
  {
    name: "Khoa Vuong",
    email: "khoavuong@example.net",
  },
  {
    name: "Duc Vuong",
    email: "ducvuong@example.net",
  },
  {
    name: "Trang Cao",
    email: "trangcao@example.net",
  },
  {
    name: "Quang Ly",
    email: "quangly@example.net",
  },
  {
    name: "Tien Nguyen",
    email: "tiennguyen@example.net",
  },
  {
    name: "Quang Dang",
    email: "quangdang@example.net",
  },
];
const About = () => {
  const userState = useSelector((state) => state.userInfo); // lấy data từ store ra sài
  return (
    <PrimaryLayout>
      <div className="About">
        <div className="about-section">
          <h1>About Us Page</h1>
          <h2>1st name: {userState.firstName}</h2>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/view-product" className="nav-link">
                View Product
              </Link>
            </li>
          </ul>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>
      </div>
    </PrimaryLayout>
  );
};

export default About;
