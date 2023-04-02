

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route,Routes } from 'react-router-dom';

function App() {



  

  return (
    <>
      <Navbar title='newsMonkey'/>
      
      <Routes>
        <Route exact path='/science'   element={<News key="science" category={'science'} page={1} title={'Science'}/>}></Route>
        <Route exact path='/'  element={<News  key="general" category={'general'} page={1} title={'General'}/>}></Route>
        <Route exact path='/technology' element={<News key="technology"  category={'technology'} title={'Technology'} page={1}/>}></Route>
        <Route exact path='/health'  element={<News  key="health" category={'health'} title={'Health'} page={1}/>}></Route>
        <Route exact path='/sports'   element={<News key="sports" category={'sports'} title={'Sports'} page={1}/>}></Route>
        <Route exact path='/entertainment'   element={<News  key="entertainment" category={'entertainment'} title={'Entartainment'} page={1}/>}></Route>
        <Route exact path='/business'   element={<News key="business" category={'business'}title={'Business'} page={1}/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
