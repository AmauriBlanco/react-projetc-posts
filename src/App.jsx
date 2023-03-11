import { Header } from "./components/Header";
import { Post } from "./components/Post";
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/AmauriBlanco.png",
            name: "Amauri Blanco",
            role: "Web Developer",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "Link", content: "👉 jane.design/doctorcare" },
            { type: "Link", content: "#novoprojeto #nlw #rocketseat" },
        ],
        publishedAt: new Date("2023-02-03 20:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/arielsardinha.png",
            name: "Ariel",
            role: "Web Developer",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "Link", content: "👉 jane.design/doctorcare" },
            { type: "Link", content: "#novoprojeto #nlw #rocketseat" },
        ],
        publishedAt: new Date("2023-03-09 20:00:00"),
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://github.com/AmauriBlanco.png",
            name: "Amauri Blanco",
            role: "Web Developer",
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            { type: "Link", content: "👉 jane.design/doctorcare" },
            { type: "Link", content: "#novoprojeto #nlw #rocketseat" },
        ],
        publishedAt: new Date("2023-03-01 20:00:00"),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return (
                            <Post 
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    );
}
export default App;
