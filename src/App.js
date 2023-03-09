
import './WelcomePage.css';
import backgroundImage from './insect-dome-background.jpg';
import React, { useState } from 'react';



function WelcomePage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    // Do something when button is clicked
  };

  return (
    <div className="welcome-page" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="content">
        <h1>Welcome to Visual Insect Dome</h1>
        <p>
          ยินดีต้อนรับเข้าสู่โดมแมลงจำลองนี้คือแหล่งข้อมูลสำหรับการสำรวจโลกของแมลง ไม่ว่าคุณจะเป็นนักวิทยาศาสตร์ นักเรียน หรือคนที่รักแมลงโดมของเราเป็นสถานที่ที่เหมาะสำหรับการเรียนรู้และค้นพบ
        </p>
        <h2>สิ่งที่คุณจะได้พบต่อไปนี้</h2>
        <p>
          ที่โดมแมลงจำลองของเราคุณจะได้พบกับการให้ความรู้เกี่ยวกับโลกของแมลงที่น่าหลงใหล นี่เป็นเพียงบางส่วนที่คุณสามารถสำรวจได้
        </p>
        <ul>
          <li>นิทรรศการผีเสื้อที่มีชีวิต</li>
          <li>สวนสัตว์แมลงที่มีสัตว์หลากหลายสายพันธุ์ที่พบบริเวณเส้นทางศึกษาธรรมชาติที่วิทยาลัยชัยบาดาลพิพัฒน์</li>
          <li>ศูนย์การเรียนรู้แบบโต้ตอบกับเหล่าแมลงที่คุณสนใจ</li>
          <li>การประชุมเชิงปฏิบัติการและสัมมนาที่นำโดยผู้เชี่ยวชาญในสถานที่จริง</li>
          <li>ห้องสมุดวิจัยที่มีหนังสือและวารสารเกี่ยวกับกีฏวิทยา</li>
        </ul>
        <p className="welcome-message">
          We can't wait to see you at Visual Insect Dome!
        </p>
        <a href="https://nitassakanproject.blogspot.com/2023/03/insect-simulation-exhibition-in-khao_7.html" target="_blank" rel="noopener noreferrer">
        <button onClick={handleButtonClick}>Click me to start</button>
      </a>
        {buttonClicked && <p>You clicked the button!</p>}
      </div>
    </div>
  );
}

export default WelcomePage;
