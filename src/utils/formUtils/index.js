/* eslint-disable react/prop-types */
/*
 * Collection of redux form fields
 * With some validations over these fields
*/

import React from 'react';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import { FormLabel, FormControl, FormGroup, DropdownButton } from 'react-bootstrap';

momentLocaliser(moment);

const Validations = (props) => {
  const {
    touched,
    error,
    validationError,
    warning,
  } = props;

  return (
    <>
      <div>
        {touched && ((error && <span className="field_error">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
      {validationError && (
        <div>
          {(validationError && <span className="field_error">{validationError}</span>)}
        </div>
      )}
    </>
  );
};

const renderField = (props) => {
  const {
    input,
    label,
    name,
    type,
    placeholder,
    disabled,
    validationError,
    meta: { touched, error, warning },
  } = props;

  return (
    <FormGroup className="force-mb-10" style={{ width: '100%' }}>
      <FormLabel className="force_mb-5" for={name}>{label || ''}</FormLabel>
      <FormControl {...input} disabled={disabled || false} type={type} className={validationError || (touched && error) ? 'validation-error' : ''} placeholder={placeholder || ''} />
      <Validations
        props={{
          touched,
          error,
          validationError,
          warning,
        }}
      />
    </FormGroup>
  );
};

const renderSelectField = (props) => {
  const {
    input,
    label,
    validationError,
    name,
    options,
    // disabled,
    // defaultSelected,
    placeholder,
    meta: { touched, error, warning },
  } = props;

  return (
    <FormGroup>
      <FormLabel className="force_mb-5" for={name}>{label || ''}</FormLabel>
      <FormControl
        as="select"
        value={input.value}
        onChange={input.onChange} 
      >
        {placeholder && 
          <option value="">{placeholder}</option>}
        {options && options.map((option, index) => (
            <option key={index}>{option}</option>
        ))}
      </FormControl>
      <Validations
        props={{
          touched,
          error,
          validationError,
          warning,
        }}
      />
      {/* <DropdownButton
        {...input}
        data={options || []}
        defaultValue={defaultSelected}
        name={name}
        className={validationError || (touched && error) ? 'validation-error' : ''}
        disabled={disabled || false}
        placeholder={placeholder || null}
      /> */}     
    </FormGroup>
  );
};

// const renderDatePicker = (props) => {
//   const {
//     input: { onChange, value },
//     label,
//     disabled,
//     formatType,
//     timeFormating,
//     name,
//     step,
//     time,
//     date,
//     placeholder,
//     validationError,
//     meta: { touched, error, warning },
//   } = props;

//   return (
//     <FormGroup className="force-mb-10">
//       <Label className=" force_mb-5" for={name}>{label || ''}</Label>
//       <DateTimePicker
//         onChange={onChange}
//         format={formatType}
//         time={time}
//         date={date}
//         step={step || 5}
//         timeFormat={timeFormating}
//         disabled={disabled || false}
//         defaultValue={null}
//         placeholder={placeholder || ''}
//         className={validationError || (touched && error) ? 'validation-error' : ''}
//         value={!value ? null : new Date(value)}
//         min={null}
//       />
//       <Validations
//         props={{
//           touched,
//           error,
//           validationError,
//           warning,
//         }}
//       />
//     </FormGroup>
//   );
// };

// const renderCheckbox = (props) => {
//   const {
//     input,
//     placeholder,
//     validationError,
//     checked,
//     meta: { touched, error, warning },
//   } = props;

//   return (
//     <FormGroup check>
//       <Label check>
//         <Input {...input} checked={checked} type="checkbox" />
//         {' '}
//         {placeholder}
//       </Label>
//       <Validations
//         props={{
//           touched,
//           error,
//           validationError,
//           warning,
//         }}
//       />
//     </FormGroup>
//   );
// };



export {
  renderField,
  renderSelectField,
  // renderCheckbox,
  // renderDatePicker,
};
