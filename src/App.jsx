import "./App.css";
import Form from "./Components/form";
// import RevisitingForm from "./Components/RevistingForm";
// import GeneralForm from "./Components/GeneralForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="mx-5">
          Food Delivery Form
          <Form />
          {/* <GeneralForm/> */}
          {/* <RevisitingForm/> */}
        </div>
      </div>
    </>
  );
}

export default App;
