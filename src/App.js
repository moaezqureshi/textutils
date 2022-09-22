
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      {/* <Navbar aboutText="About text" title="TextUtils" />  */}
      <Navbar  /> 
      <div className="container my-3">
        <TextForm heading="Enter the text analyze Below"  />
      </div>
    </>
  );
}

export default App;
