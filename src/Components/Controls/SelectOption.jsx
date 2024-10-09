import PropTypes from "prop-types";
import { forwardRef } from "react";

export const SelectOption = forwardRef((props, ref) => {
  const { className = "", error, label, options, ...other } = props;
  return (
    <div className="form-floating mb-3">
      <select className={`form-select ${className}`} ref={ref} {...other}>
        {options.map((item, i) => {
          return (
            <option key={i} value={item.mode}>
              {item.text}
            </option>
          );
        })}
      </select>
      <label>{label}</label>
      {error && <div className="error-feedback">{error?.message}</div>}
    </div>
  );
});

SelectOption.displayName = "SelectOption";
SelectOption.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
