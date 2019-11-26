import React from "react";
import * as cx from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

const compensationTypes = ["Salary", "Hourly", "On-completion"];

const CompensationSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h6" className={styles.subtitle}>
        Compensation
      </Typography>
      <FormControl
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
      >
        <InputLabel>Compensation Type</InputLabel>
        <Select
          name="compensation.type"
          value={values.compensation.type}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {compensationTypes.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Compensation Value"
        name="compensation.value"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.compensation.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
};

export default CompensationSubForm;
