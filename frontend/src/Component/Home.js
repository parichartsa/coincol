import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logoImage from './images/logo.png';
import image14 from './images/image 14.png';
import image12 from './images/image 12.png';
import image13 from './images/image 13.png';
import image6 from './images/image 6.png';
import image7 from './images/image 7.png';
import image8 from './images/image 8.png';
import image9 from './images/image 9.png'; 
import image10 from './images/image 10.png';
import image48 from './images/image 48.png';
import image49 from './images/image 49.png';
import image50 from './images/image 50.png';
import image51 from './images/image 51.png';
import group2 from './images/Group 2.png';

const Homepage = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul>
          <li><a href="#">หน้าแรก</a></li>
          <li><Link to="/profile">ผลิตภัณฑ์</Link></li>
          <li><Link to="/knowledge">การดูแลรักษา</Link></li>
          <li className="signup-box">
            <Link to="/" className="signup-button">Log out</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="header-container">
          <h1>เหรียญ<span className="different-color">กษาปณ์</span></h1>
          <h3>เงินตราที่ทำด้วยโลหะซึ่งมีค่าในตัวเอง สามารถชำระหนี้ได้ตามกฏหมาย</h3>
          <div className="box">
            <img src={image14} alt="Icon" />
            <li><Link to="/profile">ผลิตภัณฑ์</Link></li>
          </div>
          <div className="box">
            <img src={image12} alt="Icon" />
            <a href="https://www.treasury.go.th/th/#News">กรมธนารักษ์</a>
          </div>
          <div className="box">
            <img src={image13} alt="Icon" />
            <a href="https://www.mof.go.th/th/home">กระทรวงการคลัง</a>
          </div>
        </div>
        <div className="container-img">
          <img src={group2} alt="" />
        </div>
      </div>

      <div className="content">
        <h1>ประวัติ<span className="different-color">กองกษาปณ์</span></h1>
        <div className="history">
          <div className="history-box">
            <img src={image6} alt="รูปภาพ" />
            <h2>พ.ศ. 2403-2418</h2>
            <p>โรงกษาปณ์สิทธิการ โรงกษาปณ์แห้งแรกของประเทศไทย</p>
          </div>
          <div className="history-box">
            <img src={image7} alt="รูปภาพ" />
            <h2>พ.ศ. 2419-2425</h2>
            <p>เปลี่ยนชื่อเป็นกองกษาปณ์ ให้กองกษาปณ์ดูแลและคุ้มครองสิทธิการของประชาชน</p>
          </div>
          <div className="history-box">
            <img src={image8} alt="รูปภาพ" />
            <h2>พ.ศ. 2426-2433</h2>
            <p>พัฒนาการบริการด้านการกู้ยืมและการชำระหนี้ของกองกษาปณ์</p>
          </div>
          <div className="history-box">
            <img src={image9} alt="รูปภาพ" />
            <h2>พ.ศ. 2434-2439</h2>
            <p>กองกษาปณ์เปิดสาขาทั่วประเทศ</p>
          </div>
          <div className="history-box">
            <img src={image10} alt="รูปภาพ" />
            <h2>พ.ศ. 2440-ปัจจุบัน</h2>
            <p>กองกษาปณ์เป็นหน่วยงานส่วนราชการในกระทรวงการคลัง</p>
          </div>
        </div>

        <h1>กว่าจะเป็นเหรียญกษาปณ์</h1>
        <div className="how-to-make">
          <div className="make-coin-box">
            <img src={image48} alt="Icon" />
            <Link to="/home">ทำแม่แบบ</Link>
          </div>
          <div className="make-coin-box">
            <img src={image49} alt="Icon" />
            <a href="#">ผลิตดวงตรา</a>
          </div>
          <div className="make-coin-box">
            <img src={image50} alt="Icon" />
            <a href="#">ผลิตเหรียญตัวเปล่า</a>
          </div>
          <div className="make-coin-box">
            <img src={image51} alt="Icon" />
            <a href="#">ติดตราเหรียญสำเร็จ</a>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
