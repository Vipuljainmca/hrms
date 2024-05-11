import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Row, Col, FormGroup, Label } from 'reactstrap';
import useValidation from '../useValidation';

const Step4 = ({ Formvalue, errors, register, jumpToStep }) => {
  const { step4Validation } = useValidation(Formvalue);

  function nextBtnHandler() {
    if (step4Validation()) {
      // console.log('first page next button clicked', Formvalue);
      jumpToStep(4);
    } else {
      console.log('validation failed');
    }
  }

  return (
    <>
      <Row>
        <Col sm="12">
          <div title="Form Validation" className=" m-auto  mt-2" style={{ width: '920px' }}>
            <div className="d-flex justify-content-between">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.casualLeave"
                  >
                    Caual Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.casualLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.casualLeave && 'Caual Leave is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.sickLeave"
                  >
                    Sick Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.sickLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.sickLeave && 'Sick Leave is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.earnedLeave"
                  >
                    Earned Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.earnedLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.earnedLeave && 'Earned Leave is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.maternityLeave"
                  >
                    Maternity Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.maternityLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.maternityLeave && 'Maternity Leave is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.paternityLeave"
                  >
                    Paternity Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.paternityLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.paternityLeave && 'Paternity Leave is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="leavesDetails.beareavementLeave"
                  >
                    Bereavement Leave *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('leavesDetails.beareavementLeave', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.leavesDetails?.beareavementLeave && ' Bereavement Leave is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
        <div className="d-flex justify-content-center text-center">
          <FormGroup>
            <button type="button" className="btn btn-primary mx-2" onClick={() => jumpToStep(2)}>
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
Step4.propTypes = {
  jumpToStep: PropTypes.func,
  Formvalue: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
};

export default Step4;
