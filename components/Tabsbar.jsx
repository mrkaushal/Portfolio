import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/pdf.png" filename="resume.pdf" path="/resume" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" />
      <Tab icon="/git_icon.svg" filename="gitignore.git" path="/github" />
      {/* <Tab icon="/markdown_icon.svg" filename="bookmarks.md" path="/bookmarks" /> */}
    </div>
  );
};

export default Tabsbar;
