import Sidebar from './components/sidebar';
import Header from './components/header';
import CourseGrid from './components/CourseGrid';
import { GlobalStyle } from './styles/GlobalStyle';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <CourseGrid />
        </div>
      </div>
    </>
  );
};

export default App;
