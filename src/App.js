import "./App.css";
import Routing from "./routing/Routing";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={null}>
      <Routing />
    </Suspense>
  );
} 

export default App;
