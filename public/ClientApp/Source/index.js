import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

//Component
import Layout from '../components/Layout'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

//css
import './index.css';

const App = ()=>{
    return (
        <div className="container">
            <Header/>
            <Layout />
            <Footer/>
        </div>
        
    );
};

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById('c-root')
);