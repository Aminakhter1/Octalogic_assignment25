
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepperForm from './components/StepperForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepperForm />} />
      </Routes>
    </Router>
  );
}

export default App;
