import React, { useEffect } from "react";
import 'animate.css';
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal('.about_main', {
      reset: true,
      duration: 2000,
      origin: "bottom",
      distance: "200px",
      easing: "cubic-bezier(0.3, 0, 0, 1)",
    });
  }, []);

  return (
    <div className="about_container" id="about">
      <h1 className="about_title">About Me</h1>
      <div className="about_main">
        <div className="about_pic">
          <div className="color"></div>
          <div className="pic"><img src={process.env.PUBLIC_URL + "/IMG/Garry_2.jpg"} alt="" /></div>
        </div>
        <div className="about_text">
          <h3>我是徐祐瑋</h3>
          <p>
            今年 26 歲，畢業於元智大學資訊工程學系，個性外向，善於溝通也樂於分享，並喜歡學習新知識與技能。
            <br />
            大學期間在玖澤資訊實習，負責4~5間駐點MIS工程師，協助企業內部系統規劃與開發MIS系統的功能，至各單位處理連線相關作業及問題排除擔任各項資訊系統整合與維護、及測試工作，實習期間也會協助維護公司網頁前端部分。
            <br /><br />
            畢業後選擇到法國打工度假一年，由於沒有先學習法文只能以英文溝通，因而在巴黎餐廳擔任二廚一職一年。
            <br />
            回台灣後從事了網路行銷及網頁設計等工作至今，並在業餘時間自主學習.Net core,MySQL,React等網頁開發技術。
            <br />
            目前就職於高思達科技有限公司，擔任網頁ERP開發軟體工程師一職，使用JavaScript、HTML、Jquery、Oracle netsuite等技術實現網站自動化等需求。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
