import React from "react";
import * as cx from "classnames";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import BonusesSubForm from "./BonusesSubForm";
import NumberFormat from 'react-number-format';

const compensationTypes = ["Salary", "Hourly", "On-completion"];

const CompensationSubForm = ({ styles, values, handleBlur, handleChange }) => {
  return (
    <>
      <Typography variant="h5" className={styles.subtitle}>
        Compensation
      </Typography>
      <TextField
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        select
        label="Compensation Type"
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
      </TextField>
      <NumberFormat
        thousandSeparator
        prefix="$"
        customInput={TextField}
        label="Compensation Value"
        name="compensation.value"
        margin="normal"
        variant="filled"
        className={cx(styles.smallField, styles.field)}
        value={values.compensation.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <BonusesSubForm
        styles={styles}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </>
  );
};

export default CompensationSubForm;
