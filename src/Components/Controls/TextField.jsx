import PropTypes from "prop-types";
import { forwardRef } from "react";

export const TextField = forwardRef((props, ref) => {
  const { type = "text", className = "", error,label, ...other } = props;
  return (
    <div className="form-floating mb-3">
      <input
        ref={ref}
        className={`form-control ${className}`}
        type={type}
        placeholder={label}
        {...other}
      />
      <label>{label}</label>
      {error && (
              <div className="error-feedback">{error?.message}</div>
            )}
    </div>
  );
});

TextField.displayName = "TextField";
TextField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
