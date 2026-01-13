export default function Awards() {
  const awards = [
    '2025 코레일 해커톤 | 내일路(로) 해커톤 장려상',
    '2023 SW 창업경진대회 우수상',
    '2023 전국 대학생 프로그래밍 경진대회 장려상 (구름)',
    '2023 서울시 주최 해커톤(새싹톤) 우수상 (210팀 중 3위)',
    '2023 HGU HACKATHON 우수상 (3위)',
    '2022 전국 대학생 프로그래밍 경진대회 장려상 (구름)',
  ];

  return (
    <section>
      <div className="container">
        <h2>수상</h2>

        <ul className="awards-list">
          {awards.map((award, index) => (
            <li key={index}>
              <span className="award-icon">🏆</span>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
