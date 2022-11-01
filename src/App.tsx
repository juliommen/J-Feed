import './global.css'
import { Header } from "./components/Header"
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import { POSTS } from './constants';

export function App() {
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {POSTS.map((post) => <Post key={post.id} post={post}/>)}
        </main>
      </div>
    </div>
  )
}

