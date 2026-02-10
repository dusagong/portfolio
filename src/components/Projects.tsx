import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectsByCategory, type Project } from '../data/projects';

type CategoryFilter = 'all' | 'company' | 'side' | 'university';

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const companyProjects = getProjectsByCategory('company');
  const sideProjects = getProjectsByCategory('side');
  const universityProjects = getProjectsByCategory('university');

  const getFilteredProjects = () => {
    switch (filter) {
      case 'company':
        return companyProjects;
      case 'side':
        return sideProjects;
      case 'university':
        return universityProjects;
      default:
        return null; // show categorized view
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Link to={`/project/${project.id}`} className="project-card-link">
      <div className="project-card">
        {project.images && project.images[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="project-card-thumbnail"
          />
        )}
        <h4 className="project-title">{project.title}</h4>
        <p className="project-period">{project.period}</p>
        <p className="project-desc">{project.shortDesc}</p>
        <span className="view-detail">자세히 보기 →</span>
      </div>
    </Link>
  );

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects">
      <div className="container">
        <h2>프로젝트</h2>

        {/* Category Filter Tabs */}
        <div className="category-tabs">
          <button
            className={`category-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            전체
          </button>
          <button
            className={`category-tab ${filter === 'company' ? 'active' : ''}`}
            onClick={() => setFilter('company')}
          >
            회사 경험
          </button>
          <button
            className={`category-tab ${filter === 'side' ? 'active' : ''}`}
            onClick={() => setFilter('side')}
          >
            사이드 프로젝트
          </button>
          <button
            className={`category-tab ${filter === 'university' ? 'active' : ''}`}
            onClick={() => setFilter('university')}
          >
            학부시절
          </button>
        </div>

        {filter === 'all' ? (
          <>
            {/* 회사 경험 */}
            <div className="subsection">
              <h3 className="subsection-title">회사 경험</h3>
              {companyProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* 학부시절 경험 */}
            <div className="subsection">
              <h3 className="subsection-title">학부시절 경험</h3>
              {universityProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="projects-grid">
            {filteredProjects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
