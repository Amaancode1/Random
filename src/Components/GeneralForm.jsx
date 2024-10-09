import { useState } from "react";

const GeneralForm = () => {
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  console.log(formData);
  return (
    <form action="" onSubmit={handleSubmit}>

      {/* Customer Mobile Number */}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Name Please"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Customer Mobile Number */}
      <div className="mb-3">
        <label className="form-label">Mobile Number : </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Mobile Number "
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary"> Submit </button>

    </form>
  );
};

export default GeneralForm;
