import React from 'react';
import classes from './CustomInput.module.css'

/**TODO:
 * - rewrite UI components using index.js and modules
 */

const CustomInput = (props) => {
  return (
    <input className={classes.customInput} {...props} />
  )
};

export default CustomInput;