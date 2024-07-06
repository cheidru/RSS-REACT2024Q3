import './App.css';
import Header from '../components/header/header';
import SearchPanel from '../components/search/search';
import ResultPanel from '../components/search-result/search-result';
import Footer from '../components/footer/footer';

function App() {

  return (
    <>
      <Header />
      <SearchPanel />
      <ResultPanel />
      <Footer />
    </>
  );
}

export default App;
