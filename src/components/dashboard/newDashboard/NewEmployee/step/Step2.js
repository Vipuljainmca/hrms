import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import useValidation from '../useValidation';
import useCustomDepartment from '../../../../../store/dashboard/customDepartment/useCustomDepartment';
import useEmployeeData from '../../../../../store/dashboard/employee/useEmployeeData';

const Step2 = ({ Formvalue, jumpToStep, register, errors }) => {
  const { step2Validation } = useValidation(Formvalue);
  const {employeeData} = useEmployeeData();
  const {
    customDepartment: { customDepartment },
  } = useCustomDepartment();

  console.log(customDepartment?.map((dep) => dep?.departmentName));

  function nextBtnHandler() {
    if (step2Validation()) {
      jumpToStep(2);
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
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.employeeId"
                  >
                    Employee ID *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('officialDetails.employeeId', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.officialDetails?.employeeId && 'Employee ID is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.idCardExpirationDate"
                  >
                    id Card Exp date *
                  </Label>
                  <div className="">
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('officialDetails.idCardExpirationDate', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.idCardExpirationDate &&
                      'id Card Exp date is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="officialDetails.department"
                  >
                    Department *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('officialDetails.department', { required: true })}
                    >
                      <option value="">Select</option>
                      {customDepartment?.map((dep) => (
                        <option key={dep?._id} value={dep?.departmentName}>
                          {dep?.departmentName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.department && 'Please select Department.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.designation"
                  >
                    Designation *
                  </Label>
                  <div className="">
                    <input
                      type="text"
                      // value={Formvalue.dateOfBirth}
                      {...register('officialDetails.designation', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.designation && 'Designation is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label className="control-Label text-start mb-0" htmlFor="officialDetails.grade">
                    Grade *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('officialDetails.grade', { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.grade && 'Please select Grade.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.joiningDate"
                  >
                    Date of Joining *
                  </Label>
                  <div className="">
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('officialDetails.joiningDate', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.joiningDate && 'Date of Joining is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex  justify-content-between">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.grossSalary"
                  >
                    Gross Salary/Stipend *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('officialDetails.grossSalary', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.grossSalary && 'Gross Salary/Stipend is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.primaryReporting"
                  >
                    Primary Reporting *
                  </Label>
                  <div>
                    {/* <input
                      type="text"
                      {...register('officialDetails.primaryReporting', { required: true })}
                      className="form-control m-0 border-gray"
                    /> */}
                    <select {...register('officialDetails.primaryReporting', { required: true })}>
                      {employeeData?.employee?.map((emp)=><option value={emp?._id}>{`${emp?.officialDetails?.employeeId.toUpperCase()}-${emp?.personalDetails?.candidateName.toUpperCase()} (${emp?.officialDetails?.designation.toUpperCase()})`}</option>)}
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.primaryReporting && 'Primary Reporting is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.secondaryReporting"
                  >
                    Secondary Reporting *
                  </Label>
                  <div>
                  <select {...register('officialDetails.secondaryReporting', { required: true })}>
                      {employeeData?.employee?.map((emp)=><option value={emp?._id}>{`${emp?.officialDetails?.employeeId.toUpperCase()}-${emp?.personalDetails?.candidateName.toUpperCase()} (${emp?.officialDetails?.designation.toUpperCase()})`}</option>)}
                    </select>
                    {/* <input
                      type="text"
                      {...register('officialDetails.secondaryReporting', { required: false })}
                      className="form-control m-0 border-gray"
                    /> */}
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.secondaryReporting &&
                      'Secondary Reporting is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="officialDetails.officialEmailAddress"
                  >
                    Official Email *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('officialDetails.officialEmailAddress', {
                        required: false,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.officialEmailAddress && 'Official Email is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start "
                    htmlFor="officialDetails.officialNumber"
                  >
                    Official Number *
                  </Label>
                  <div>
                    <input
                      type="number"
                      {...register('officialDetails.officialNumber', {
                        required: false,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.officialNumber && 'Official Number is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="officialDetails.lastDayOfWorking"
                  >
                    Last Day of Working
                  </Label>
                  <div>
                    <input
                      type="date"
                      {...register('officialDetails.lastDayOfWorking', { required: false })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.lastDayOfWorking &&
                      'Last Day of Working is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="officialDetails.activeEmployee"
                  >
                    Active *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('officialDetails.activeEmployee', { required: true })}
                    >
                      <option value="">Select</option>
                      {/* eslint-disable-next-line react/jsx-boolean-value */}
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.officialDetails?.activeEmployee && 'Please select active status.'}
                  </span>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
        <div className="d-flex justify-content-center text-center">
          <FormGroup>
            <button type="button" className="btn btn-primary mx-2" onClick={() => jumpToStep(0)}>
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
Step2.propTypes = {
  jumpToStep: PropTypes.func,
  Formvalue: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
};

export default Step2;
