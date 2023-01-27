import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='App'>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
