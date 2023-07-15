import styles from '../styles/ResumePage.module.css';


const ResumePage = () => {
  const fileURL = 'https://drive.google.com/uc?export=download&id=1-TjbOQn7hg4tSmKE0JMtHqfZGXm8UACu';
    return (
      <>
        <a href={fileURL} className={styles.btn} rel="noreferrer" style={{display: 'inline-block', marginBottom: '10px', padding: '10px', textAlign: 'left'}}>
        Download Resume
        </a>
        <iframe width="100%" height="100%" src="https://drive.google.com/file/d/1-TjbOQn7hg4tSmKE0JMtHqfZGXm8UACu/preview" allow="autoplay"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;
