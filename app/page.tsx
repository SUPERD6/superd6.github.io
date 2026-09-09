import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';

const projects = [
  { title: 'Four-bit absolute comparator', category: 'Digital circuit design & optimization', date: 'Mar – Jul 2024', description: 'Designed and optimized a four-bit absolute comparator, from Boolean logic to circuit-level performance. Verified functionality in MATLAB and explored the trade-off between energy consumption and delay.', details: ['Simplified logic with Karnaugh maps and De Morgan’s laws.', 'Analyzed critical paths and adjusted gate sizes and supply voltage.', 'Project accepted by the 2024 International Conference on Computers, Information Processing and Advanced Education (CIPAE).'], tools: ['Logic optimization', 'MATLAB', 'Gate sizing'] },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="#" className="wordmark" aria-label="Hongyu Deng, home">HD<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#education">Education</a><a href="#experience">Experience</a><a href="mailto:hongyudeng6@gmail.com" className="nav-contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
    </header>
    <main id="main">
      <section className="intro" aria-labelledby="name">
        <div className="intro-copy"><p className="eyebrow">Electrical & Computer Engineering</p><h1 id="name">Hongyu<br />Deng<span>.</span></h1><p className="intro-text">A background in electronic engineering, with project experience in digital circuit design and optimization.</p><div className="intro-links"><a className="primary-link" href="/Hongyu_Deng_Academic_CV.pdf" download>Download CV <ArrowDown size={18} aria-hidden="true" /></a><a className="text-link" href="mailto:hongyudeng6@gmail.com">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
        <aside className="academic-note" aria-label="Academic background"><span className="note-label">Graduate studies</span><h2>Lehigh<br />University</h2><p>Master’s in Electrical and Computer Engineering</p><div className="note-bottom"><span>Expected graduation</span><strong>May 2027</strong></div><div className="note-rule" /><p className="note-foot">P.C. Rossin College of Engineering<br />and Applied Science</p></aside>
      </section>
      <section id="projects" className="content-section" aria-labelledby="projects-title">
        <div className="section-heading"><span className="section-index">01 / Projects</span><h2 id="projects-title">Selected work</h2><p>Logic design and circuit optimization.</p></div>
        <div className="project-list">{projects.map(project => <article className="project" key={project.title}><div className="project-meta"><span>{project.category}</span><span>{project.date}</span></div><h3>{project.title}</h3><p>{project.description}</p><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="tags" aria-label="Methods and tools">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}
        </div>
      </section>
      <section id="education" className="content-section" aria-labelledby="education-title">
        <div className="section-heading"><span className="section-index">02 / Education</span><h2 id="education-title">Academic path</h2></div>
        <div className="education-list">
          <article className="education-item"><div className="education-date">Expected May 2027</div><div><h3>Lehigh University</h3><p>Master’s in Electrical and Computer Engineering</p><p className="secondary">P.C. Rossin College of Engineering and Applied Science<br />Pennsylvania, United States</p></div></article>
          <article className="education-item"><div className="education-date">Sep 2021 – Jun 2025</div><div><h3>Maynooth University</h3><p>BEng in Electronic Engineering</p><p className="secondary">Joint Degree Program<br />Maynooth, Ireland</p></div></article>
          <article className="education-item"><div className="education-date">Sep 2021 – Jun 2025</div><div><h3>Fuzhou University</h3><p>BEng in Electronic Information Engineering</p><p className="secondary">Maynooth International Engineering College<br />Fuzhou, China</p></div></article>
        </div>
      </section>
      <section id="experience" className="content-section" aria-labelledby="experience-title">
        <div className="section-heading"><span className="section-index">03 / Experience</span><h2 id="experience-title">Engineering in practice</h2></div>
        <div><article className="experience-item"><div className="project-meta"><span>Internship · Technical Department</span><span>Mar – Jun 2024</span></div><h3>Electrical Control Engineer</h3><p className="company">Xiamen Deep Blue Power Technology Co., Ltd</p><p>Supported circuit-board testing and repair for charging equipment, installation and testing of a home backup energy storage device, and battery-pack module improvements addressing overheating.</p><p>Contributed to multithreading and algorithm optimization, product testing, and data analysis.</p></article><div className="skills"><h3>Technical toolkit</h3><div className="tags"><span>C++</span><span>Python</span><span>MATLAB</span></div></div></div>
      </section>
    </main>
    <footer><div><span className="eyebrow">Contact</span><a href="mailto:hongyudeng6@gmail.com" className="email-link">hongyudeng6@gmail.com <Mail size={22} aria-hidden="true" /></a></div><p>Hongyu Deng<br /><span>Electrical & Computer Engineering</span></p></footer>
  </>;
}
