import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import profile from './profile.json';

export const dynamic = 'error';

export default function Home() {
  const graduate = profile.education[0];
  const contact = 'mailto:' + profile.email;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header id="top" className="site-header" tabIndex={-1}>
      <a href="#top" className="wordmark" aria-label={profile.name + ', home'}>HD<span>.</span></a>
      <nav aria-label="Main navigation">
        {profile.learning.length > 0 && <a href="#learning">Learning</a>}
        {profile.projects.length > 0 && <a href="#projects">Projects</a>}
        {profile.publications.length > 0 && <a href="#publications">Publications</a>}
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href={contact}>Contact <ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>
    </header>
    <main id="main" tabIndex={-1}>
      <section className="intro" aria-labelledby="name">
        <p className="eyebrow">Electrical &amp; Computer Engineering</p>
        <h1 id="name">{profile.name}<span>.</span></h1>
        <p className="intro-text">{profile.intro}</p>
        <p className="graduation">{graduate.institution} <span aria-hidden="true">/</span> Expected graduation: {graduate.date.replace('Expected ', '')}</p>
        <div className="intro-links">
          <a className="primary-link" href="/Hongyu_Deng_Academic_CV.pdf" download>Download CV <ArrowDown size={17} aria-hidden="true" /></a>
          <a className="text-link email" href={contact}><Mail size={17} aria-hidden="true" />{profile.email}</a>
        </div>
      </section>

      {profile.learning.length > 0 && <section id="learning" className="content-section" aria-labelledby="learning-title">
        <div className="section-heading"><span className="section-index">01</span><h2 id="learning-title">Independent study</h2></div>
        <div>{profile.learning.map(entry => <article className="learning-entry" key={entry.topic}>
          <h3>{entry.topic}</h3><p className="project-summary">{entry.summary}</p>
        </article>)}</div>
      </section>}

      {profile.projects.length > 0 && <section id="projects" className="content-section" aria-labelledby="projects-title">
        <div className="section-heading"><span className="section-index">02</span><h2 id="projects-title">Projects</h2></div>
        <div>{profile.projects.map(project => <article className="project-entry" key={project.title}>
          <div className="entry-meta"><span>{project.category}</span><span>{project.date}</span></div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.description}</p>
        </article>)}</div>
      </section>}

      {profile.publications.length > 0 && <section id="publications" className="content-section" aria-labelledby="publications-title">
        <div className="section-heading"><h2 id="publications-title">Publications</h2></div>
        <div>{profile.publications.map(paper => <article className="publication" key={paper.doi}>
          <div className="entry-meta"><span className="publication-status">{paper.status} · Conference paper</span><span>{paper.year}</span></div>
          <h3><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3>
          <p className="publication-authors">{paper.authors.join(', ')}</p>
          <p className="publication-venue">{paper.venue}, pp. {paper.pages}.</p>
          {paper.summary && <p className="publication-summary">{paper.summary}</p>}
          <div className="paper-links">
            <a className="text-link" href={paper.url} target="_blank" rel="noopener noreferrer">Paper / DOI <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="text-link" href={paper.publisher_url} target="_blank" rel="noopener noreferrer">Publisher page <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </article>)}</div>
      </section>}

      <section id="education" className="content-section" aria-labelledby="education-title">
        <div className="section-heading"><span className="section-index">03</span><h2 id="education-title">Education</h2></div>
        <div>{profile.education.map(item => <article className="education-item" key={item.institution}>
          <div className="entry-meta"><h3>{item.institution}</h3><span>{item.date}</span></div>
          <p>{item.degree}</p>
          <p className="secondary">{item.school && <>{item.school}<br /></>}{item.location}</p>
        </article>)}</div>
      </section>

      <section id="experience" className="content-section" aria-labelledby="experience-title">
        <div className="section-heading"><span className="section-index">04</span><h2 id="experience-title">Experience</h2></div>
        <div>{profile.experience.map(item => <article className="experience-item" key={item.organization + item.date}>
          <div className="entry-meta"><span>Internship</span><span>{item.date}</span></div>
          <h3>{item.organization}</h3>
          <p className="role">{item.role}</p>
          <ul>{item.bullets.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </article>)}
          <dl className="skills">{profile.skills.map(skill => <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.value}</dd></div>)}</dl>
        </div>
      </section>
    </main>
    <footer>
      <a className="text-link email" href={contact}><Mail size={17} aria-hidden="true" />{profile.email}</a>
      <a className="text-link" href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </>;
}
