import { useEffect, useState } from 'react'
import './App.css'
import heroImage from './assets/hero.png'
import profileImage from './assets/me.jpg'
import cvFile from './assets/Abey_Ashebir_CV.pdf'

const fallbackProfile = {
  name: 'Abey Ashebir',
  role: 'Software Engineer | Full-Stack Web Developer',
  location: 'Fitche, North Shoa, Oromia, Ethiopia',
  email: 'abeyashebir@gmail.com',
  phone: '+251 934 478 593',
  summary:
    'Software Engineering graduate with hands-on experience in backend development, frontend integration, database design, REST APIs, and practical engineering workflows.',
  heroImage,
  photo: profileImage,
  cvUrl: cvFile,
  stats: [
    { label: 'CGPA', value: '3.54' },
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '2 yrs' },
    { label: 'Stack', value: 'MERN' },
  ],
  about: {
    paragraphOne:
      'I am a software engineering graduate focused on building maintainable web applications, solving real-world technical problems, and creating systems that are efficient, scalable, and easy to support.',
    paragraphTwo:
      'From Laravel and Django projects to React-based frontend work, I enjoy building solutions that combine strong engineering discipline with a clear understanding of user needs and business value.',
  },
  strengths: [
    'Full-stack development with React, Laravel, and Django',
    'RESTful API design and database integration',
    'Analytical thinking and debugging',
    'Team collaboration and adaptive problem solving',
  ],
  experience: [
    {
      title: 'Software Engineering Graduate',
      company: 'Wolkite University',
      period: '2021 — 2026',
      description:
        'Completed a BSc in Software Engineering with focus on systems, networking, software design, and full-stack web development.',
      highlights: [
        'Built multiple academic and practical projects with React, Laravel, Django, Node.js, Java, and C++.',
        'Worked on database-driven systems, API-based applications, and real-world engineering workflows.',
        'Developed strong debugging, optimization, and team collaboration skills.',
      ],
    },
    {
      title: 'Practical / Internship Experience',
      company: 'Real-world product development',
      period: '2024 — 2026',
      description:
        'Developed backend logic and frontend integrations for database-driven systems while improving maintainability and software quality.',
      highlights: [
        'Implemented full-stack web apps using modern frameworks and tools.',
        'Applied Git/GitHub, Postman, database design, and API testing in real workflows.',
        'Focused on maintainable architecture, troubleshooting, and practical engineering solutions.',
      ],
    },
  ],
  projects: [
    {
      name: 'IES – Instructor Evaluation System',
      type: 'MERN Stack',
      description:
        'A full-stack evaluation platform for managing instructor assessments, reports, and feedback workflows.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/Abey-Ashebir/IES-Instructor-Evaluation-System',
    },
    {
      name: 'Digital Unity Telegram Bot',
      type: 'Automation',
      description:
        'A Python-based Telegram bot for automating campus and business-related communication workflows.',
      stack: ['Python', 'Telegram Bot API'],
      link: 'https://github.com/Abey-Ashebir/Digital_Unity_bot',
    },
    {
      name: 'AfroFarm',
      type: 'MERN Stack',
      description:
        'A web platform focused on agribusiness operations, product management, and digital service support.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/Abey-Ashebir/Full-Stack-Egg-Delivery-Website',
    },
  ],
  skills: [
    {
      category: 'Technical Skills',
      items: ['Laravel', 'React.js', 'Django', 'Node.js / Express', 'HTML / CSS / Tailwind', 'JavaScript / TypeScript', 'MySQL / MongoDB', 'Java / C++ / PHP / Python'],
    },
    {
      category: 'Tools & Practices',
      items: ['Git / GitHub', 'RESTful API Design', 'MVC Architecture', 'OOP', 'Postman', 'Agile'],
    },
    {
      category: 'Personal Skills',
      items: ['Time Management', 'Analytical Thinking', 'Problem Solving', 'Attention to Detail', 'Team Collaboration', 'Adaptability & Fast Learning'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'Wolkite University, Ethiopia',
      period: '2026',
    },
    {
      degree: 'National Exit Examination',
      school: 'Ethiopia',
      period: 'Passed 2026',
    },
  ],
  languages: [
    { language: 'Amharic', level: 'Fluent' },
    { language: 'Afaan Oromo', level: 'Fluent' },
    { language: 'English', level: 'Intermediate' },
  ],
  certifications: ['TenaMart', 'CISCO', 'Great Learning', '5 Million Ethio Coders', 'Udemy', 'Wolkite University'],
  contact: [
    { label: 'Email', value: 'abeyashebir@gmail.com', href: 'mailto:abeyashebir@gmail.com' },
    { label: 'Phone', value: '+251 934 478 593', href: 'tel:+251934478593' },
    { label: 'GitHub', value: 'github.com/Abey-Ashebir', href: 'https://github.com/Abey-Ashebir' },
    { label: 'Location', value: 'Fitche, North Shoa, Oromia', href: '#' },
  ],
}

function App() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile')
        if (!response.ok) {
          throw new Error('Failed to load profile data')
        }

        const data = await response.json()
        setProfile({ ...fallbackProfile, ...data, photo: profileImage, heroImage, cvUrl: cvFile })
      } catch {
        setProfile({ ...fallbackProfile, photo: profileImage, heroImage, cvUrl: cvFile })
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="loading-shell">
        <div className="loader" />
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Abey Ashebir home">
          A<span>.</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={profile.cvUrl || '#'} target="_blank" rel="noreferrer" className="primary-button">
          Download CV
        </a>
      </header>

      <main className="content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer • Full-Stack Developer • Problem Solver</p>
            <h1>
              {profile.name}
              <span>{profile.role}</span>
            </h1>
            <p className="lead">{profile.summary}</p>

            <div className="hero-meta">
              <span className="meta-pill">{profile.location}</span>
              <span className="meta-pill">{profile.email}</span>
            </div>

            <div className="cta-row">
              <a href="#projects" className="primary-button">
                View projects
              </a>
              <a href={profile.cvUrl || '#'} target="_blank" rel="noreferrer" className="secondary-button">
                Resume
              </a>
            </div>

            <div className="stats-grid">
              {profile.stats?.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-card">
              <img src={profile.heroImage || heroImage} alt="Abey Ashebir portfolio cover" />
            </div>
            <div className="floating-card">
              <span>Currently building</span>
              <strong>Reliable web systems</strong>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p>About</p>
            <h2>Engineering practical digital experiences with clarity and purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="portrait-panel glass-card">
              <img src={profile.photo || profileImage} alt={profile.name} className="profile-photo" />
            </div>

            <div className="glass-card about-card">
              <p>{profile.about?.paragraphOne}</p>
              <p>{profile.about?.paragraphTwo}</p>

              <ul className="highlight-list">
                {profile.strengths?.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p>Experience</p>
            <h2>Career milestones and technical impact.</h2>
          </div>

          <div className="timeline">
            {profile.experience?.map((job) => (
              <article key={`${job.company}-${job.period}`} className="timeline-card glass-card">
                <div className="timeline-date">{job.period}</div>
                <div className="timeline-body">
                  <span className="company-name">{job.company}</span>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <ul>
                    {job.highlights?.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p>Projects</p>
            <h2>Selected work and product thinking.</h2>
          </div>

          <div className="project-grid">
            {profile.projects?.map((project) => (
              <article key={project.name} className="project-card glass-card">
                <div className="project-header">
                  <span className="project-tag">{project.type}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="stack-list">
                  {project.stack?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p>Skills</p>
            <h2>Tools, technologies, and strengths.</h2>
          </div>

          <div className="skills-grid">
            {profile.skills?.map((skillSet) => (
              <div key={skillSet.category} className="glass-card skill-card">
                <h3>{skillSet.category}</h3>
                <div className="chip-list">
                  {skillSet.items?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p>Education</p>
            <h2>Academic background.</h2>
          </div>

          <div className="education-list glass-card">
            {profile.education?.map((item) => (
              <div key={`${item.degree}-${item.period}`} className="education-item">
                <div>
                  <strong>{item.degree}</strong>
                  <span>{item.school}</span>
                </div>
                <em>{item.period}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="languages">
          <div className="section-heading">
            <p>Languages</p>
            <h2>Communication and certifications.</h2>
          </div>

          <div className="skills-grid">
            <div className="glass-card skill-card">
              <h3>Languages</h3>
              <div className="chip-list">
                {profile.languages?.map((item) => (
                  <span key={item.language}>{item.language} — {item.level}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skill-card">
              <h3>Certifications</h3>
              <div className="chip-list">
                {profile.certifications?.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p>Contact</p>
            <h2>Let’s build something useful together.</h2>
          </div>

          <div className="contact-card glass-card">
            <div className="contact-links">
              {profile.contact?.map((item) => (
                <a
                  key={`${item.label}-${item.value}`}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>

            <a href={profile.cvUrl || '#'} target="_blank" rel="noreferrer" className="primary-button wide-button">
              Download CV
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with a product mindset.</p>
      </footer>
    </div>
  )
}

export default App
