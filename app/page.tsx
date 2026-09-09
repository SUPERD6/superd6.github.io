import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import profile from './profile.json';

export default function Home() {
  const graduate = profile.education[0];
  const contact = 'mailto:' + profile.email;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a href="#" className="wordmark" aria-label={profile.name + ', home'}>HD<span>.</span></a>
      <nav aria-label="Main navigation">{profile.publications.length > 0 && <a href="#publications">Publications</a>}<a href="#education">Education</a><a href="#experience">Experience</a><a href={contact} className="nav-contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
    </header>
    <main id="main">
      <section className="intro" aria-labelledby="name">
        <div className="intro-copy"><p className="eyebrow">Electrical & Computer Engineering</p><h1 id="name">{profile.name.split(' ')[0]}<br />{profile.name.split(' ').slice(1).join(' ')}<span>.</span></h1><p className="intro-text">{profile.intro}</p><div className="intro-links"><a className="primary-link" href="/Hongyu_Deng_Academic_CV.pdf" download>Download CV <ArrowDown size={18} aria-hidden="true" /></a><a className="text-link" href={contact}>Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a></div></div>
        <aside className="academic-note" aria-label="Academic background"><span className="note-label">Graduate studies</span><h2>{graduate.institution}</h2><p>{graduate.degree}</p><div className="note-bottom"><span>Expected graduation</span><strong>{graduate.date.replace('Expected ', '')}</strong></div><div className="note-rule" /><p className="note-foot">{graduate.school}</p></aside>
      </section>
      {profile.publications.length > 0 && <section id="publications" className="content-section" aria-labelledby="publications-title">
        <div className="section-heading"><span className="section-index">01 / Research</span><h2 id="publications-title">Publications</h2></div>
        <div>{profile.publications.map(paper => <article className="project publication" key={paper.doi}>
          <div className="project-meta"><span className="publication-status">{paper.status} · Conference paper</span><span>{paper.year} · pp. {paper.pages}</span></div>
          <h3><a href={paper.url} target="_blank" rel="noopener noreferrer">{paper.title}</a></h3>
          <p className="publication-authors">{paper.authors.join(', ')}</p><p>{paper.venue}</p>
          {paper.summary && <p>{paper.summary}</p>}
          <div className="intro-links"><a className="text-link" href={paper.url} target="_blank" rel="noopener noreferrer">Paper / DOI <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href={paper.publisher_url} target="_blank" rel="noopener noreferrer">Publisher page <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </article>)}</div>
      </section>}
      <section id="education" className="content-section" aria-labelledby="education-title">
        <div className="section-heading"><span className="section-index">02 / Education</span><h2 id="education-title">Academic path</h2></div>
        <div className="education-list">{profile.education.map(item => <article className="education-item" key={item.institution}><div className="education-date">{item.date}</div><div><h3>{item.institution}</h3><p>{item.degree}</p><p className="secondary">{item.school && <>{item.school}<br /></>}{item.location}</p></div></article>)}</div>
      </section>
      <section id="experience" className="content-section" aria-labelledby="experience-title">
        <div className="section-heading"><span className="section-index">03 / Experience</span><h2 id="experience-title">Engineering in practice</h2></div>
        <div>{profile.experience.map(item => <article className="experience-item" key={item.organization + item.date}><div className="project-meta"><span>Internship</span><span>{item.date}</span></div><h3>{item.role}</h3><p className="company">{item.organization}</p>{item.bullets.map(detail => <p key={detail}>{detail}</p>)}</article>)}<div className="skills"><h3>Technical toolkit</h3><div className="tags">{profile.programming.map(skill => <span key={skill}>{skill}</span>)}</div></div></div>
      </section>
    </main>
    <footer><div><span className="eyebrow">Contact</span><a href={contact} className="email-link">{profile.email} <Mail size={22} aria-hidden="true" /></a></div><p>{profile.name}<br /><span>Electrical & Computer Engineering</span></p></footer>
  </>;
}
