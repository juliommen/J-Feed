import logo from '../assets/logo.png'
import styles from './Header.module.css'
export function Header() {
  return(
    <div className={styles.header}>
      <img src={logo} alt="" />
      <h1>J-Feed</h1>
    </div>
  )
}