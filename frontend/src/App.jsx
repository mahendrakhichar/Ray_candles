import { Toaster } from 'react-hot-toast';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <>
      <Toaster position="top-right" /> {/* Add Toaster here */}
      <AppRoutes />
    </>
  );
}

export default App;