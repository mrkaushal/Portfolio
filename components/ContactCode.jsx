import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'kaushalpatel.info',
    href: 'https://kaushalpatel.com',
  },
  {
    social: 'email',
    link: 'mail@kaushalpatel.com',
    href: 'mailto:mail@kaushalpatel.com',
  },
  {
    social: 'github',
    link: 'mrkaushal',
    href: 'https://github.com/mrkaushal',
  },
  {
    social: 'linkedin',
    link: 'mrkaushalp',
    href: 'https://www.linkedin.com/in/mrkaushalp/',
  },
  {
    social: 'twitter',
    link: 'mr_kaushal_p',
    href: 'https://www.twitter.com/mr_kaushal_p',
  },
  {
    social: 'instagram',
    link: 'mr.kaushal.p',
    href: 'https://www.instagram.com/mr.kaushal.p',
  },
  {
    social: 'telegram',
    link: 'mr_kaushal_p',
    href: 'https://t.me/mr_kaushal_p',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
