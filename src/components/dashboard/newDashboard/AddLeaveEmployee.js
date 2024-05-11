import React from 'react';
import { Row, Col, FormGroup, Label, Card } from 'reactstrap';
import Form from 'react-validation/build/form';
import { useForm } from 'react-hook-form';
import useEmployeeData from '../../../store/dashboard/employee/useEmployeeData';
import useLeaveData from '../../../store/dashboard/leave/useLeaveData';

export default function AddLeaveEmployee() {
  const { employeeData } = useEmployeeData();
  const { createLeave } = useLeaveData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createLeave(data);
  };

  return (
    <Card className="rounded-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="12">
            <div title="Form Validation" className="w-75 m-auto mt-2">
              <div className="d-flex justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="employeeId">
                    Select A Employee *
                  </Label>
                  <div className="mb-2">
                    <select
                      id="employeeId"
                      name="employeeId"
                      className="form-select"
                      {...register('employeeId', { required: true })}
                      required
                    >
                      {' '}
                      <option>SELECT A EMPLOYEE</option>
                      {employeeData?.employee?.map((employee) => (
                        <option key={employee?._id} value={employee?._id}>
                          {`${employee?.personalDetails?.candidateName} (${employee?.officialDetails?.employeeId}) (${employee?.officialDetails?.designation})`.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-danger">{errors.leaveType && 'Please select value.'}</span>
                </FormGroup>

                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="leaveType">
                    Select Leave Type *
                  </Label>
                  <div className="mb-2">
                    <select
                      // value={Formvalue.gender}
                      className="form-control"
                      {...register('leaveType', { required: true })}
                    >
                      {/* <option value=''>Select Option</option> */}
                      <option value="earned-leave">Earned Leave</option>
                      <option value="sick-leave">Sick Leave</option>
                      <option value="casual-leave">Casual Leave</option>
                    </select>
                  </div>
                  <span className="text-danger">{errors.leaveType && 'Please select value.'}</span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25">
                  <Label className="control-Label text-start" htmlFor="startDate">
                    Leave Start Date *
                  </Label>
                  <div className="">
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('startDate', { required: true })}
                      className="form-control"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.startDate && 'Date of birth is required.'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25">
                  <Label className="control-Label text-start" htmlFor="endDate">
                    Leave End Date *
                  </Label>
                  <div>
                    <input
                      type="date"
                      // value={Formvalue.dateOfBirth}
                      {...register('endDate', { required: true })}
                      className="form-control"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.endDate && 'Leave End Date is required.'}
                  </span>
                </FormGroup>
              </div>

              <div className="d-flex  justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="leaveType">
                    Leave Status *
                  </Label>
                  <div className="mb-2">
                    <select
                      // value={Formvalue.gender}
                      className="form-control"
                      {...register('status', { required: true })}
                    >
                      {/* <option value=''>Select Option</option> */}
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <span className="text-danger">{errors.leaveType && 'Please select value.'}</span>
                </FormGroup>

                <FormGroup className="d-flex flex-column m-2 gap-2 w-25">
                  <Label className="control-Label text-start" htmlFor="reason">
                    Reason *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      // value={Formvalue.phoneNumber}
                      {...register('reason', {
                        required: true,
                      })}
                      className="form-control"
                    />
                  </div>
                  <span className="text-danger">{errors.reason && 'Enter a Reason'}</span>
                </FormGroup>
              </div>
            </div>
          </Col>
          <div className="text-center">
            <FormGroup>
              <button type="submit" className="btn btn-primary mx-2">
                Save
              </button>
            </FormGroup>
          </div>
        </Row>
      </Form>
    </Card>
  );
}
