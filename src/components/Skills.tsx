export default function Skills() {
  const skills = [
    {
      category: '프로그래밍 언어',
      items: 'C, Java, Python, Dart, HTML/CSS, JavaScript, TypeScript',
    },
    {
      category: '모바일 개발',
      items: 'Flutter, Firebase',
    },
    {
      category: '웹 & 백엔드',
      items: 'React, Node.js, Django',
    },
    {
      category: '데이터베이스',
      items: 'MySQL, PostgreSQL, MongoDB, Firebase RTDB',
    },
    {
      category: '실시간 통신',
      items: 'WebSocket, MQTT',
    },
    {
      category: '인프라',
      items: 'AWS, Nginx, Docker',
    },
    {
      category: 'API',
      items: 'RESTful API, Swagger',
    },
    {
      category: '기타',
      items: 'Unity (C#), Git',
    },
  ];

  return (
    <section>
      <div className="container">
        <h2>기술 스택</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-category">
              <h4>{skill.category}</h4>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
