import s from "./ProFile.module.css";
import Massages from "./Massages/Massages";
import Posts from "./Posts/Posts";
import { Routes, Route, Link } from 'react-router-dom';

const ProFile = () => {
    return (
        <section className={s.container}>
            <div className={s.body}>
                {/* <Massages />  */}
                <Routes>
                    <Route path="/massages" element={<Massages />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>
        </section>
    );
}

export default ProFile;