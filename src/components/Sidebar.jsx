import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/AmauriBlanco.png"/>

                <strong>Amauri Blanco</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>    
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}
