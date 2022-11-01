import styles from './Avatar.module.css'

export function Avatar({src, hasBorder = true}:any){
  return (
    <img 
      className={ !hasBorder ? styles.avatar : styles.avatar +" "+ styles.avatarWithBorder} 
      src={src}
    />
  )
}