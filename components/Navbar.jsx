import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Product",
      url: "/product",
    },
   
    {
      id: 3,
      title: "Order",
      url: "/orders",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
    
  ];

  return (
    
<div className={styles.container}>
      <div className={styles.logo}>
      <Image src="/img/pizza-pizza.svg" alt="logo" width="100" height="60"/>
      </div>
      <div className={styles.links}>
        
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
     
      </div>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone-icon.jpg" alt="" width="50" height="50" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
          <Image src="/img/cart1.png" alt="" width="30" height="30" />
         < div className={styles.counter}>{quantity}</div>
        </div>
        </Link>
        
      </div>
    </div>
  );
};
export default Navbar;
