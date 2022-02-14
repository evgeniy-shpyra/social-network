import s from "./ProFile.module.css";
import Massages from "./Massages/Massages";
import Posts from "./Posts/Posts";
import { Routes, Route} from 'react-router-dom';

const ProFile = (props) => {
    
    return (
        <section className={s.container}>
            <div className={s.body}>
                <Routes>
                    <Route exact path="/massages/*" element={<Massages persons={props.persons} dialogs={props.dialogs} />} />
                    <Route path="/posts" element={<Posts posts={props.posts} />} />
                </Routes>
            </div>
        </section>
    );
}

export default ProFile;