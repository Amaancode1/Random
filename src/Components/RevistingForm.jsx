import { useForm } from "react-hook-form";

const RevisitingForm = () => {
  const { register,handleSubmit } = useForm();

//   const customerControl = register("customerName");
//   console.log(customerControl);

  const handleFormSubmit = (formData) => {
    console.log("Form data", formData);
  };

  return (
    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      {/* Customer Mobile Number */}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Customer Name"
        //   name={customerControl.name}
        //   ref={customerControl.ref}
        //   onChange={customerControl.onChange}
        //   onBlur={customerControl.onBlur}
          {...register("customerName",{
            value:"Amaan"
          })}
        />
      </div>

      {/* Customer Mobile Number */}
      <div className="mb-3">
        <label className="form-label">Mobile Number : </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Customer Mobile Number "
          {...register("mobileNumber",{
            value:"9876543210"
          })}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
};

export default RevisitingForm;
