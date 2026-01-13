export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <img
          src="/portfolio/IMG_8820.png"
          alt="윤승재 프로필"
          className="profile-image"
        />
        <h1>Seungjae Yoon</h1>
        <p>
          안녕하세요, 윤승재라고 합니다.
        </p>
        <p>
          어릴적부터 무언가를 직접 만들어보는 것을 좋아합니다.
          스마트팜 IoT 제어, LLM 챗봇, 롤링페이퍼 서비스, 코인 트레이딩 프로그램, 모바일 앱 등 기술을 실생활에 적용하는 프로젝트들을 진행해왔습니다.
        </p>
        <p>
          모든 경험을 성장의 소중한 동력으로 생각하며 살아가고 있습니다.
        </p>

        <div className="keywords">
          <span className="keyword">열정</span>
          <span className="keyword">긍정</span>
          <span className="keyword">인내</span>
          <span className="keyword">감사</span>
        </div>

        <div className="contact-list">
          <div className="contact-item">
            <span>🖥️</span>
            <a href="https://ilovecomputerscience.tistory.com/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </div>
          <div className="contact-item">
            <span>👨‍💻</span>
            <a href="https://github.com/dusagong" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <span>✉️</span>
            <a href="mailto:devethanyoon@gmail.com">devethanyoon@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>📞</span>
            <span>010-2385-2382</span>
          </div>
          <div className="contact-item">
            <span>🎂</span>
            <span>2001.04.12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
