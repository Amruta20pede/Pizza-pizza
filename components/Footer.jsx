import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.title_heading}>
            <Image src="/img/pizza-pizza-white.svg" alt="" width="110" height="60" />
            {/* <h3> Pizza Paradise</h3>  */}
          </div>
        </div>
        <div className={styles.itemwrapper}>
        <div className={styles.item}>
          
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            
            <p className={styles.text}>
              Lorem ipsum dolor sit.
              Lorem ipsum , 85022
              <br /> (602) 867-1012
            </p>
            <p className={styles.text}>
            Lorem ipsum dolor sit.
            Lorem ipsum , 85022
              <br /> (602) 867-1013
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY UNTIL FRIDAY
              <br /> 9:00 – 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00 – 24:00
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.copywrapper}>
        <p>@Copyright 2023.All Rights Reserved </p> 
      </div>
    </div>
  );
};

export default Footer;

