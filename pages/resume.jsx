import styles from '../styles/ResumePage.module.css';
import { FaFileDownload } from 'react-icons/fa';


const ResumePage = () => {
  const fileURL = 'https://drive.google.com/uc?export=download&id=1-TjbOQn7hg4tSmKE0JMtHqfZGXm8UACu';
    return (
      <>
        <a href={fileURL} className={styles.btn} rel="noreferrer">
        <FaFileDownload/>
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
