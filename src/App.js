import "./App.css";
import Body from "./Section/Body/Body";
import Banner from "./Shared/Banner/Banner";
import Categories from "./Shared/Categories/Categories";
import NavigationBar from "./Shared/NavigationBar/NavigationBar";

function App() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Categories></Categories>
            <Body></Body>
        </div>
    );
}

export default App;
