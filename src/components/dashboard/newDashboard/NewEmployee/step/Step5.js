import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Row, Col, FormGroup, Label } from 'reactstrap';
import useValidation from '../useValidation';

const Step5 = ({ Formvalue, errors, register, jumpToStep }) => {
  const { step5Validation } = useValidation(Formvalue);
  function nextBtnHandler() {
    if (step5Validation()) {
      jumpToStep(5);
      jumpToStep(6);
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
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.aadharCard"
                  >
                    Aadhar Card *
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.aadharCard', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.aadharCard && 'Aadhar Card is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label className="control-Label mb-0 text-start" htmlFor="documentStatus.panCard">
                    PAN Card *
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.panCard', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.panCard && 'PAN Card is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.tenthMarksheetCertificate"
                  >
                    10th Marksheet *
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.tenthMarksheetCertificate', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.tenthMarksheetCertificate &&
                      '10th Marksheet is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.tweleveMarksheetCertificate"
                  >
                    12th Marksheet
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.tweleveMarksheetCertificate', {
                        required: false,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.tweleveMarksheetCertificate &&
                      '12th Marksheet is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.graduationMarksheetCertificate"
                  >
                    Graduation Marksheet
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.graduationMarksheetCertificate', {
                        required: false,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.graduationMarksheetCertificate &&
                      'Graduation Marksheet is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.mastersMarksheetCertificate"
                  >
                    Masters Mark Sheet
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.mastersMarksheetCertificate', {
                        required: false,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.mastersMarksheetCertificate &&
                      'Masters Mark Sheet is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.relievingLetter"
                  >
                    Relieving Letter
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.relievingLetter', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.relievingLetter && 'Relieving Letter is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.experienceLetter"
                  >
                    Experience Letter
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.experienceLetter', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.experienceLetter && 'Experience Letter is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="documentStatus.salarySlip"
                  >
                    Salary Slip
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.salarySlip', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.salarySlip && 'Salary Slip  is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label className="control-Label mb-0 text-start" htmlFor="documentStatus.photo">
                    Photo
                  </Label>
                  <div>
                    <input
                      type="file"
                      {...register('documentStatus.photo', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.photo && 'Photois required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="documentStatus.policyAcknowledgement"
                  >
                    Policy acknowledgement
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('documentStatus.policyAcknowledgement', { required: false })}
                    >
                      <option value="">Select</option>
                      {/* eslint-disable-next-line react/jsx-boolean-value */}
                      <option value={true}>Acknowledged</option>
                      <option value={null}>Pending</option>
                      <option value={false}>Denied</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.policyAcknowledgement &&
                      'Please select Policy acknowledgement.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label className="control-Label text-start mb-0" htmlFor="documentStatus.idType">
                    ID Type
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('documentStatus.idType', { required: false })}
                    >
                      <option value="">Select</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Contractual">Contractual</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.idType && 'Please select  ID Type.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="documentStatus.idStatus"
                  >
                    ID Status
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('documentStatus.idStatus', { required: false })}
                    >
                      <option value="">Select</option>
                      <option value="Assigned">Assigned</option>
                      <option value="NotAssigned">Not Assigned</option>
                      <option value="Expired">Expired</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.documentStatus?.idStatus && 'Please select ID Status.'}
                  </span>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
        <div className="d-flex justify-content-center text-center">
          <FormGroup>
            <button type="button" className="btn btn-primary mx-2" onClick={() => jumpToStep(3)}>
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
Step5.propTypes = {
  jumpToStep: PropTypes.func,
  Formvalue: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
};
export default Step5;
