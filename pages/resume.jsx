import styles from '../styles/ResumePage.module.css';
import { FaFileDownload } from 'react-icons/fa';


const ResumePage = () => {
  const fileURL = 'https://drive.usercontent.google.com/uc?id=1MjbTow_DrS_IRcTVsEGFWLDVsC6Rr2Cf&export=download';
    return (
      <>
        <a href={fileURL} className={styles.btn} rel="noreferrer">
        <FaFileDownload/>
        Download Resume
        </a>
        <iframe width="100%" height="90%" src="https://drive.google.com/file/d/1MjbTow_DrS_IRcTVsEGFWLDVsC6Rr2Cf/preview" allow="autoplay"></iframe>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: "Resume" },
    };
  }
  
export default ResumePage;
