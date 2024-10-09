import { useForm } from "react-hook-form";
import { TextField } from "./Controls/TextField";
import { SelectOption } from "./Controls/SelectOption";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      orderNo: new Date().valueOf(),
      email: "",
      customerName: "",
      mobileNumber: "",
      paymentMethod: "",
      deliveryIn: 0,
    },
  });

  const SelectOptions = [
    { mode: "", text: "Select" },
    { mode: "Online", text: "Pay Online" },
    { mode: "COD", text: "Cash on Delivery" },
  ];
  const DeliveryOptions = [
    { mode: 0, text: "Select" },
    { mode: 30, text: "Half an Hour" },
    { mode: 60, text: "1 Hour" },
    { mode: 120, text: "2 Hour" },
    { mode: 180, text: "3 Hour" },
  ];
  const handleFormSubmit = (formData) => {
    console.log("Form data", formData);
  };

  const handleError = (err) => {
    console.log("Form Data Errors ", err);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleFormSubmit, handleError)}>
      <div className="row mb-2 mt-3">
        {/* Order Number */}
        <div className="col">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Order Number"
              {...register("orderNo", {})}
            />
            <label># Order No.</label>
          </div>
        </div>
        {/* Order Number Ends Here */}

        {/* Customer Mobile Number */}
        <div className="col">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Customer Mobile Number"
              {...register("mobileNumber", {
                required: "This field is required",
                minLength: {
                  value: 10,
                  message: "Must be 10 digit",
                },
                maxLength: {
                  value: 10,
                  message: "Must be 10 digit",
                },
              })}
            />
            <label>Mobile Number</label>
          </div>
        </div>
        {/* Mobile Number Ends Here*/}
      </div>

      {/* Customer Name */}

      <div className="row mb-2">
        <div className="col">
          <div className="form-floating mb-3">
            <TextField
              label="Customer Name"
              {...register("customerName", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              error={errors.customerName}
            />
          </div>
          {/* Customer Name ends Here */}

          {/* Email Address */}
          <div className="form-floating mb-3">
            <TextField
              type="email"
              label="Customer Email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect Email Format",
                },
                // validate: {
                //   notFake: (value) =>
                //     value !== "email@gmail.com" ||
                //     "Particular email is blocked",
                //   notFromBlackListedDomain: (value) => {
                //     return (
                //       (!value.endsWith("xyz.com") &&
                //         !value.endsWith("example.com")) ||
                //       "The Domain is not supported"
                //     );
                //   },
                // },
              })}
              error={errors.email}
            />
          </div>
          {/* Email Ends Here */}
        </div>
      </div>
      <div>List of Ordered Food items</div>
      <div className="row mb-2">
        <div className="col">
          <SelectOption
            label="Payment Method"
            options={SelectOptions}
            {...register("paymentMethod", {
              required: "Please Select payment option",
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          {" "}
          <SelectOption
            label="Delivery Option"
            options={DeliveryOptions}
            {...register("deliveryIn", {
              required: "Please Delivery option",
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
      <div>Delivery Address</div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

/* 

 <div className="form-floating">
            <select
              className="form-select"
              {...register("paymentMethod", {
               
              })}
            >
              <option value="">Select</option>
              <option value="Online">Pay Online</option>
              <option value="COD">Cash on Delivery</option>
            </select>
            <label>Payment Method</label>
          </div>
*/

{
  /* Customer Name

      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Enter Customer Name"
          {...register("customerName", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        <label>Customer Name</label>
      </div>
       Customer Name

      Email Address
 
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email Address"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect Email Format",
                },
                validate: {
                  notFake: (value) =>
                    value !== "email@gmail.com" ||
                    "Particular email is blocked",
                  notFromBlackListedDomain: (value) => {
                    return (
                      (!value.endsWith("xyz.com") &&
                        !value.endsWith("example.com")) ||
                      "The Domain is not supported"
                    );
                  },
                },
              })}
            />
            <label>Email Address</label>
          </div>
          {errors.email && (
            <div className="error-feedback">{errors.email?.message}</div>
          )}
        </div>
      </div>
      Email ends Here */
}
