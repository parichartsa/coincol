import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './images/logo.png';

function knowledge() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul>
          <li><Link to="/home">หน้าแรก</Link></li>
          <li><Link to="/profile">ผลิตภัณฑ์</Link></li>
          <li><Link to="/knowledge">การดูแลรักษา</Link></li>

          <div className="signup-box">
            <Link to="/" className="signup-button">Log out</Link>
          </div>
        </ul>
      </nav>
    <div className="knowledge-container">
        <header>
            <h2>ความรู้เกี่ยวกับเหรียญกษาปณ์</h2>
        </header>

        <div className="knowledge-content">
            <div className="knowledge-box">
                <h2>วิธีเก็บรักษาเหรียญ</h2>
          <details>
            <summary>1</summary>
            <p>เก็บในที่ ๆ อากาศแห้งที่สุด โดยใช้ถุง หรือ ภาชนะอื่นที่ปิสนิท อากาศเข้าไม่ได้</p>
          </details>

          <details>
            <summary>2</summary>
            <p>หมั่น ตรวจตราดูแลความสะอาดบริเวณที่เก็บ ไม่ให้มีเศษอาหารตกค้าง ไม่ให้รกรุงรัง เป็นที่อาศัยของ มด หนู และแมลงต่างๆ หลีกเลี่ยงการสัมผัสกับบรรยากาศ โดยใส่ตลับ ซองพลาสติก หรือ ซองเหรียญ (Mount) แล้วปิดผนึกไม่ให้อากาศเข้าได้ไม่ควรผนึกแน่นเกินไปจนกดทับตัวเหรียญ</p>
          </details>

          <details>
            <summary>3</summary>
            <p>ไม่วางทับซ้อนกัน ควรวางแยกจากกัน ระวังไม่ให้เหรียญกระทบ ขูดขีดกัน</p>
          </details>

          <details>
            <summary>4</summary>
            <p>ไม่ควรเคลือบผิวเหรียญด้วยสารใดๆ เพราะทำให้สารเหล่านี้ ติดกับผิวเหรียญ เมื่อลอกออก จะทำให้ผิวเสียหายได้</p>
          </details>

          <details>
            <summary>5</summary>
            <p>การหยิบจับ ควรใช้ถุงมือป้องกันเหงื่อติดตัวเหรียญ หรือ ถ้าต้องใช้มือจับ ควรจับที่ขอบเหรียญ โดยล้างมือให้สะอาดด้วยสบู่แล้วเช็ดให้แห้งเสียก่อน</p>
          </details>

          <details>
            <summary>6</summary>
            <p>ห้ามใช้กาว หรือ เทปกาว ติดตัวเหรียญ</p>
          </details>
        </div>
      </div>
 
    </div>
 
      <footer>
        <p>&copy; 2023 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default knowledge;
