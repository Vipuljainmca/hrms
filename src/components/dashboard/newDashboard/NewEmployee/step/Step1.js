import React from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types'; // Import PropTypes
import useValidation from '../useValidation';

const Step1 = ({ handleSubmit, setFormvalue, Formvalue, errors, register, jumpToStep }) => {
  const { step1Validation } = useValidation(Formvalue);

  const onSubmit = (data) => {
    console.log(data);
    setFormvalue(data);
  };
  function nextBtnHandler() {
    if (step1Validation()) {
      console.log('validation finished');
      handleSubmit(onSubmit);

      console.log('first page next button clicked', Formvalue);
      jumpToStep(1);
    } else {
      console.log('validation failed');

      console.log(Formvalue);
    }
  }
  return (
    <>
      <Row>
        <Col sm="12">
          <div title="Form Validation" className=" m-auto  mt-2" style={{ width: '920px' }}>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-100">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.candidateName"
                  >
                    Full Name *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('personalDetails.candidateName', { required: true })}
                      className="form-control m-0  border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.candidateName && 'Candidate Name is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label className="control-Label text-start mb-0" htmlFor="personalDetails.gender">
                    Gender *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0  border-gray"
                      {...register('personalDetails.gender', { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.gender && 'Please select value.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.dateOfBirth"
                  >
                    Date of birth *
                  </Label>
                  <div className="">
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('personalDetails.dateOfBirth', { required: true })}
                      className="form-control m-0  border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.dateOfBirth && 'Date of birth is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.originalBirthDay"
                  >
                    Original BirthDay *
                  </Label>
                  <div className="">
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('personalDetails.originalBirthDay', { required: true })}
                      className="form-control m-0 border-gray m-0"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.originalBirthDay && 'Original BirthDay is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.martialStatus"
                  >
                    Marital Status *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0  border-gray"
                      {...register('personalDetails.martialStatus', { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Married">Married</option>
                      <option value="Single">Unmarried</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Separated">Separated</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.martialStatus && 'Please select Marital Status.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.contactNumber"
                  >
                    Contact Number *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="number"
                      {...register('personalDetails.contactNumber', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.contactNumber && 'Enter a Valid mobile number.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex  justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label className="control-Label text-start mb-0" htmlFor="personalDetails.image">
                    Image *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="file"
                      {...register('personalDetails.image', {
                        required: false,
                      })}
                      className="form-control m-0 m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.image && 'Image is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.bloodGroup"
                  >
                    Blood Group *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control m-0 border-gray"
                      {...register('personalDetails.bloodGroup', { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.bloodGroup && 'Please select Blood Group.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2 ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.emailAddress"
                  >
                    Email *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('personalDetails.emailAddress', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.emailAddress && 'Email is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start "
                    htmlFor="personalDetails.fathersName"
                  >
                    Father&apos;s Name *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('personalDetails.fathersName', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.fathersName && 'Father Name is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.aadharNumber"
                  >
                    Aadhar Number *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('personalDetails.aadharNumber', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.aadharNumber && 'Aadhar number is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.panNumber"
                  >
                    PAN Number *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('personalDetails.panNumber', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.panNumber && 'Enter a Valid PAN number.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.emergencyContactInformation.name"
                  >
                    Emergency Person Name *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('personalDetails.emergencyContactInformation.name', {
                        required: true,
                        maxLength: 25,
                        minLength: 8,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.personalDetails?.emergencyContactInformation?.name &&
                      'Enter a Valid Emergency Person Name.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.emergencyContactInformation.relationship"
                  >
                    Relation with Person *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('personalDetails.emergencyContactInformation.relationship', {
                        required: true,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.personalDetails?.emergencyContactInformation?.relationship &&
                      'Enter a Valid Emergency Person Relationship!.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebythreefeild">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label
                    className="control-Label text-start mb-0"
                    htmlFor="personalDetails.emergencyContactInformation.phone"
                  >
                    Emergency Person Contact No. *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('personalDetails.emergencyContactInformation.phone', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.personalDetails?.emergencyContactInformation?.phone &&
                      'Enter a Valid Emergency Contact  number.'}
                  </span>
                </FormGroup>
              </div>
            </div>

            <div className="d-flex  justify-content-between flex-wrap">
              <div className="onebytwofeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.presentAddress"
                  >
                    Present Address *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('personalDetails.presentAddress', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.presentAddress && 'Present Address is required.'}
                  </span>
                </FormGroup>
              </div>
              <div className="onebytwofeild">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label
                    className="control-Label mb-0 text-start"
                    htmlFor="personalDetails.permanentAddress"
                  >
                    Permanent Address *
                  </Label>
                  <div>
                    <input
                      type="text"
                      {...register('personalDetails.permanentAddress', { required: true })}
                      className="form-control m-0 border-gray"
                    />
                  </div>
                  <span className="text-danger">
                    {errors?.personalDetails?.permanentAddress && 'Permanent Address is required.'}
                  </span>
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
        <div className="text-center">
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

Step1.propTypes = {
  jumpToStep: PropTypes.func,
  Formvalue: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  setFormvalue: PropTypes.func,
  onSubmit: PropTypes.func,
};
export default Step1;
