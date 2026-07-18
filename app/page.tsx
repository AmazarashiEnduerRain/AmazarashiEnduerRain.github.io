import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const githubUrl = "https://github.com/AmazarashiEnduerRain";
const email = "241880152@smail.nju.edu.cn";

const researchAreas = [
  {
    index: "01",
    title: "Research interests",
    text: "A focused summary of current research questions and long-term academic interests will appear here.",
  },
  {
    index: "02",
    title: "Selected projects",
    text: "Ongoing projects, open-source work, and concise descriptions of individual contributions can be added here.",
  },
  {
    index: "03",
    title: "Publications",
    text: "Paper titles, venues, author lists, and links to manuscripts, code, and project pages are ready to be listed.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader currentPage="home" />

      <main id="top" className="page-grid">
        <aside className="profile-column" aria-label="Profile">
          <img
            className="profile-photo"
            src="https://avatars.githubusercontent.com/u/179776184?v=4"
            alt="Portrait of Liangxu Wei"
            width="320"
            height="320"
          />
          <div className="profile-meta">
            <p className="eyebrow">Academic profile</p>
            <h1>Liangxu Wei</h1>
            <p className="role">Student · Nanjing University</p>
          </div>
          <div className="profile-links" aria-label="Profile links">
            <a href={`mailto:${email}`}>Email</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="/cv.pdf" className="muted-link" aria-disabled="true">
              CV · forthcoming
            </a>
          </div>
        </aside>

        <div className="content-column">
          <section id="about" className="intro section-block">
            <p className="section-label">About</p>
            <h2>
              A concise record of my academic work,
              <span> questions, and progress.</span>
            </h2>
            <div className="intro-copy">
              <p>
                I am Liangxu Wei, a student at Nanjing University. This website
                is a focused home for my research interests, selected projects,
                publications, and academic experience.
              </p>
              <p>
                The profile is intentionally minimal: clear typography, direct
                links, and enough structure to keep the most important work easy
                to find as the record grows.
              </p>
            </div>
          </section>

          <section id="research" className="section-block ruled-section">
            <div className="section-heading-row">
              <p className="section-label">Research</p>
              <p className="section-note">Current themes</p>
            </div>
            <div className="research-list">
              {researchAreas.map((area) => (
                <article className="research-item" key={area.index}>
                  <span className="item-index">{area.index}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="section-block ruled-section">
            <div className="section-heading-row">
              <p className="section-label">Selected work</p>
              <p className="section-note">Public record</p>
            </div>
            <article className="work-card">
              <div className="work-status">In preparation</div>
              <div>
                <h3>Research and project entries will be added here.</h3>
                <p>
                  Each entry can include a venue, author list, abstract-length
                  summary, and direct links to the paper, code, data, or project
                  page.
                </p>
              </div>
              <span className="work-year">2026</span>
            </article>
          </section>

          <section className="section-block ruled-section two-column-section">
            <div>
              <p className="section-label">Education</p>
              <h3>Nanjing University</h3>
              <p className="secondary-copy">
                Degree, school, research group, and advisor details can be added
                as the academic profile is completed.
              </p>
            </div>
            <div>
              <p className="section-label">Updates</p>
              <h3>Academic news</h3>
              <p className="secondary-copy">
                New papers, awards, talks, internships, and other milestones can
                be recorded here in reverse chronological order.
              </p>
            </div>
          </section>

          <section id="contact" className="contact-section section-block">
            <p className="section-label">Contact</p>
            <h2>For academic correspondence, please get in touch.</h2>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
