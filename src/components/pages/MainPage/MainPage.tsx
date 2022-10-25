import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

import styles from "./MainPage.module.scss";
import ExchangerSection from "@/components/sections/ExchangerSection";

function MainPage(): JSX.Element {

    return (
        <div className={`container ${styles.wrapper}`}>
            <header>
                <Skeleton height={100} />
            </header>
            <aside>
                <ExchangerSection />
            </aside>
            <main>
                <Skeleton height="60vh" />
            </main>
            <footer>
                <Skeleton height={100} />
            </footer>
        </div>
    );
}

export default MainPage;
