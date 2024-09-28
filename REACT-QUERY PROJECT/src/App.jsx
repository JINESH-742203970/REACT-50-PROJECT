import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <h1>The Awesome React query</h1>
            <div>
                <Link to="/">Home</Link> <br />
                <Link to="/product">Products</Link>
            </div>
        </>
    );
}

export default App;
