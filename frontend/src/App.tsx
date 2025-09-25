import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { relayEnvironment } from "./relay/Environment";
import NoiseList from "./components/NoiseList";
import AddNoiseForm from "./components/AddNoiseForm";
import './App.css';


function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Sydney Airport Noise Map</h1>
        <h2>Add New Noise Record</h2>
        <AddNoiseForm />
        <h2>All Noise Records</h2>
        <NoiseList />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;