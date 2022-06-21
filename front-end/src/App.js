import "./App.css";
// import Heading from "./Heading";
import Trainers from "./trainerApi/Trainers";

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}

      <Trainers />
    </div>
  );
}

export default App;

// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Nav from './routing/Nav';
// import Home from './routing/home';
// import About from './routing/about';
// import Shop from './routing/shop';

// function App() {
//     return(
//         <div className='App'>
//             <BrowserRouter>
//             <Nav />
//             <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route path="/About" element={<About />} />
//                 <Route  path="/Shop" element={<Shop />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }
// export default App;