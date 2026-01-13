import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Education from '../components/Education';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Awards />
      <Education />
    </main>
  );
}
