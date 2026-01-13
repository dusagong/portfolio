import { Link } from 'react-router-dom';
import { getProjectsByCategory } from '../data/projects';

export default function Projects() {
  const companyProjects = getProjectsByCategory('company');
  const sideProjects = getProjectsByCategory('side');
  const universityProjects = getProjectsByCategory('university');

  return (
    <section>
      <div className="container">
        <h2>프로젝트</h2>

        {/* 회사 경험 */}
        <div className="subsection">
          <h3 className="subsection-title">회사 경험</h3>
          {companyProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="project-card-link">
              <div className="project-card">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-period">{project.period}</p>
                <p className="project-desc">{project.shortDesc}</p>
                <span className="view-detail">자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 사이드 프로젝트 */}
        <div className="subsection">
          <h3 className="subsection-title">사이드 프로젝트 - 팀 블루베리</h3>
          <p style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
            회사에 사수가 없는 상황에서 경험의 부족함을 채우기 위해 24년도 7월부터 참여.
            성실함을 인정받아 24년도 11월부터 팀 리드 구성원으로 활동 중.{' '}
            <a href="https://blueberry-team.com/" target="_blank" rel="noopener noreferrer">
              팀 블루베리 →
            </a>
          </p>
          {sideProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="project-card-link">
              <div className="project-card">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-period">{project.period}</p>
                <p className="project-desc">{project.shortDesc}</p>
                <span className="view-detail">자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 학부시절 경험 */}
        <div className="subsection">
          <h3 className="subsection-title">학부시절 경험</h3>
          {universityProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="project-card-link">
              <div className="project-card">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-period">{project.period}</p>
                <p className="project-desc">{project.shortDesc}</p>
                <span className="view-detail">자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
