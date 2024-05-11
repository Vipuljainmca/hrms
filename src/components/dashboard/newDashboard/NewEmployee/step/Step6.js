import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types'; // Import PropTypes
import useEmployeeData from '../../../../../store/dashboard/employee/useEmployeeData';
import useValidation from '../useValidation';

export default function Step4({ Formvalue, onSubmit, jumpToStep, handleSubmit, update }) {
  const { createEmployee, updateEmployee } = useEmployeeData();
  const { setp6Validation } = useValidation(Formvalue);
  jumpToStep(6)
  function nextBtnHandler() {
    let bool = false;
    if (setp6Validation()) {
      bool = true;
    }
    return bool;
  }

  const summitHandler = async (e) => {
    e.preventDefault();
    console.log(Formvalue);
    if (nextBtnHandler()) {
      console.log('step 6 validation successfull');
      if (update) {
        updateEmployee(Formvalue);
      } else {
        handleSubmit(onSubmit);
        await createEmployee(Formvalue);
      }
    } else {
      console.log('not valid');
    }
  };

  return (
    <div className="step step4 mt-5">
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <Label className="col-md-12 control-label">
                <div>
                  <h3>Awesome</h3>
                  <h4>Employee Added successfully!</h4>
                </div>
              </Label>
            </div>
            <div className="d-flex flex-row-reverse justify-content-center text-center">
              <FormGroup>
                <button
                  type="button"
                  className="btn btn-success text-white mx-2"
                  onClick={(e) => summitHandler(e)}
                >
                  {update ? 'Update Employee' : 'Add Employee'}
                </button>
              </FormGroup>
              <FormGroup>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => jumpToStep(4)}
                >
                  Previous
                </button>
              </FormGroup>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Step4.propTypes = {
  jumpToStep: PropTypes.func, // Function to jump to a step
  Formvalue: PropTypes.object,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  update: PropTypes.bool,
};
