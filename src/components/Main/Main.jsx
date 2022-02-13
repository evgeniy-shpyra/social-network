import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";
import User from "./User/User";
import s from "./Main.module.css";
import Massages from "./Massages/Massages";
import { Route } from "react-router-dom";

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.body}>
                <Sidebar />
                <section className={s.wrapperContent}>
                    {/* <Massages /> */}
                    {/* <Route component={Massages} />
                    <Route component={Posts} /> */}
                </section>
                <User />
            </div>

        </main>
    );
}

export default Main;