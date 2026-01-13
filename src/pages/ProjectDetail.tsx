import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h1>프로젝트를 찾을 수 없습니다</h1>
        <Link to="/" className="back-link">
          ← 메인으로 돌아가기
        </Link>
      </div>
    );
  }

  const categoryLabel = {
    company: '회사 경험',
    side: '사이드 프로젝트',
    university: '학부시절 경험',
  };

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          ← 메인으로 돌아가기
        </Link>

        <header className="project-detail-header">
          <span className="project-category-badge">{categoryLabel[project.category]}</span>
          <h1>{project.title}</h1>
          <p className="project-detail-period">{project.period}</p>
        </header>

        <section className="project-detail-section">
          <h2>개요</h2>
          <p>{project.description}</p>
        </section>

        {project.metrics && project.metrics.length > 0 && (
          <section className="project-detail-section">
            <h2>성과 지표</h2>
            <div className="metrics-grid">
              {project.metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="project-detail-section">
          <h2>주요 내용</h2>
          <ul className="highlights-list">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        <section className="project-detail-section">
          <h2>기술 스택</h2>
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.videos && project.videos.length > 0 && (
          <section className="project-detail-section">
            <h2>데모 영상</h2>
            <div className="videos-grid">
              {project.videos.map((video, index) => (
                <video key={index} controls playsInline>
                  <source src={video} type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              ))}
            </div>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className="project-detail-section">
            <h2>스크린샷</h2>
            <div className="screenshots-grid">
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`${project.title} 스크린샷 ${index + 1}`} />
              ))}
            </div>
          </section>
        )}

        {project.links && project.links.length > 0 && (
          <section className="project-detail-section">
            <h2>링크</h2>
            <div className="project-links">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
