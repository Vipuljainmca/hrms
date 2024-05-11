import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types'; // Import PropTypes
import useValidation from '../useValidation';

const Step3 = ({ Formvalue, jumpToStep, register, errors }) => {
  const { step3Validation } = useValidation(Formvalue);

  function nextBtnHandler() {
    if (step3Validation()) {
      // console.log('first page next button clicked', Formvalue);
      jumpToStep(3);
    } else {
      console.log('validation failed');
    }
  }
  return (
    <>
      <Row>
        <Col sm="12">
          <div title="Form Validation" className=" m-auto  mt-2" style={{ width: '920px' }}>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label className="control-Label mb-0 text-start" htmlFor="bankDetails.bankName">
                    Bank Name 
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('bankDetails.bankName', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.bankDetails?.bankName && 'Bank Name is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="bankDetails.accountNumber"
                  >
                    A/C Number 
                  </Label>
                  <div className="">
                    <input
                      type="number"
                      // value={Formvalue.dateOfBirth}
                      {...register('bankDetails.accountNumber', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.bankDetails?.accountNumber && 'A/C Number is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label className="control-Label mb-0 text-start" htmlFor="bankDetails.ifscCode">
                    IFSC Code 
                  </Label>
                  <div className="">
                    <input
                      type="text"
                      // value={Formvalue.dateOfBirth}
                      {...register('bankDetails.ifscCode', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.bankDetails?.ifscCode && 'IFSC Code is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
        <div className="d-flex justify-content-center text-center">
          <FormGroup>
            <button type="button" className="btn btn-primary mx-2" onClick={() => jumpToStep(1)}>
              Previous
            </button>
          </FormGroup>
          <FormGroup>
            <button type="submit" className="btn btn-primary mx-2" onClick={nextBtnHandler}>
              Next
            </button>
          </FormGroup>
        </div>
      </Row>
    </>
  );
};

Step3.propTypes = {
  jumpToStep: PropTypes.func, // Function to jump to a step
  Formvalue: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
};

export default Step3;
