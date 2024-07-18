import styles from '../styles/AboutPage.module.css';


const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <p>
        A computer science student with a strong passion for problem-solving and an avid interest in the latest technology trends, my skills in programming, data analysis, and problem-solving have been honed, and the desire to apply these skills in a professional setting is strong. A proactive learner who is always seeking new challenges and opportunities to grow and develop as a computer engineer, staying current with the latest trends and advancements in the field has been a top priority to stay on top of the game and excel in studies.
      </p>
      <br />
      {/* Education */}
      <h2>Education</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/charusat.jpg" alt="charusat" />
            <h3 className={styles.title}>CHARUSAT University, Anand</h3>
            <span className={styles.span}>B.Tech - Computer Science (2021 - 2024)</span>
          </div>
          <p className={styles.desc}><b>Grade: CGPA - 8.11</b><br />I have attended the Blockchain Technology workshop, also participated in 30 Days of Google Cloud Challenge. I am also participating in hackathons and other events.<br /></p>
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/amity.png" alt="amity" />
            <h3 className={styles.title}>Amity University Online</h3>
            <span className={styles.span}>B.B.A. - General (2021 - 2024)</span>
          </div>
          <p className={styles.desc}><b>Grade: SGPA - 8.00</b><br />I have completed Advance Excel course from Amity University as a part of my B.B.A Career. I have also attended workshops that was being held by working professional<br /></p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/edu/gtu.png" alt="GTU" />
            <h3 className={styles.title}>Gujarat Technological University</h3>
            <span className={styles.span}>Diploma C.E. (2018 - 2021)</span>
          </div>
          <p className={styles.desc}><b>Grade: CGPA - 9.50</b><br />I have completed Diploma in computer engineering from OM Institute of Engineering & Technology, Junagadh, Gujarat. I have completed many projects and one of them is Hospital Management System using Django framework that works on Python.</p>
        </div>
        <br />
      </div>
      <br />
      {/* Experience */}
      <h2>Experience</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/exp/iaswe.jpg" alt="prolog" style={{ height: '50px', width: '50px' }} />
            <h3 className={styles.title}>IASWE Solutions Pvt. Ltd. (InfiRaise)</h3>
            <br />
            <span className={styles.span}>Full-Stack Web Developer(2024)</span>
          </div>
          <p className={styles.desc}>
          During my tenure at IASWE Solutions Pvt. Ltd., I thrived as a full-stack web developer, contributing to various projects with my expertise in both front-end and back-end technologies. Collaborating with talented teams, I honed my skills in creating robust and user-friendly web applications, ensuring seamless functionality and optimal user experience.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/exp/prolog.png" alt="prolog" style={{ height: '50px', width: '50px' }} />
            <div className={styles.text_container}>
              <h3 className={styles.title}>Prolog Infotech</h3>
              <br />
              <span className={styles.span}>Data Analyst(2023)</span>
            </div>
          </div>
          <p className={styles.desc}>
          During my tenure at Prolog Infotech, I embraced my role as a Python developer specializing in data analysis. Working closely with data sets, I leveraged Python's powerful libraries to extract meaningful insights and drive informed decision-making for clients. From data preprocessing to visualization.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img className={styles.left_img} src="/exp/phpdots.jpg" alt="PHPDOTS" />
            <h3 className={styles.title}>Tuvoc Technologies (Previous: PHP Dots)</h3>
            <span className={styles.span}>Full-Stack Web Developer (2022)</span>
          </div>
          <p className={styles.desc}>
            As an intern at PHPdots Technologies in Ahmedabad, I had the opportunity to learn and work with a variety of technologies, including PHP and MySQL. During my time at the company, I gained valuable experience in web development, database management, and programming best practices.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Freelancer</h3>
          <span className={styles.span}>Full-Stack Web Development (2022 - Present)</span>
          <p className={styles.desc}>
            As a freelancer with expertise in Shopify, Python, Django, PHP, and machine learning, I am committed to providing customized solutions to clients. I have experience working on various projects in these areas and am able to adapt to different programming languages and technologies.
          </p>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
