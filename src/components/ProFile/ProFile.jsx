import s from "./ProFile.module.css";
import Massages from "./Massages/Massages";
import Posts from "./Posts/Posts";
import { Routes, Route } from 'react-router-dom';

const ProFile = (props) => {
    
    return (
        <section className={s.body}>
            <Routes>
                <Route exact path="/massages/*" element={<Massages messagesPage={props.profilePage.messagesPage} dispatch={props.dispatch} />} />
                <Route path="/posts" element={<Posts postsPage={props.profilePage.postsPage} dispatch={props.dispatch} />} />
            </Routes>
        </section>
    );
}

export default ProFile;