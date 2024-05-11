import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Card } from 'reactstrap';
import Form from 'react-validation/build/form';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import useEmployeeData from '../../../../store/dashboard/employee/useEmployeeData';
import useCustomDepartment from '../../../../store/dashboard/customDepartment/useCustomDepartment';

export default function UpdateCustomDepartment() {
  const { employeeData } = useEmployeeData();
  const { updateCustomDepartment, customDepartment } = useCustomDepartment();

  const [selectedEmployee, setSelectedEmployee] = useState([]);

  const [departmentDetails] = useState({
    departmentName: '',
    departmentLead: '',
    departmentManager: '',
    departmentType: '',
    employees: selectedEmployee,
  });

  function allEmployeeOptions() {
    const employeeOptionArr = [];
    employeeData?.employee?.map((emp) => {
      const SingleEmployee = {
        value: emp?._id,
        label: `${emp?.officialDetails?.employeeId.toUpperCase()}-${emp?.personalDetails?.candidateName.toUpperCase()} (${emp?.officialDetails?.designation.toUpperCase()})`,
      };
      return employeeOptionArr.push(SingleEmployee);
    });
    return employeeOptionArr;
  }

  const options = allEmployeeOptions();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ default: departmentDetails });

  const handleChange = (selectedData) => {
    setSelectedEmployee(selectedData ?? []);
    const arr = selectedData?.map((obj) => {
      return obj.value;
    });
    setValue('employees', arr);
  };

  const onSubmit = (data) => {
    console.log('summit btn clicked');
    console.log(data);
    updateCustomDepartment(data);
  };

  return (
    <Card className="rounded-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="12">
            <div title="Form Validation" className="w-75 m-auto mt-2">
              <div className="d-flex justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="departmentName">
                    Department Name *
                  </Label>
                  <div className="mb-2">
                    <select
                      id="departmentName"
                      name="departmentName"
                      className="form-select"
                      {...register('departmentName', { required: true })}
                      required
                    >
                      {' '}
                      <option>SELECT A DEPARTMENT</option>
                      {customDepartment?.customDepartment?.map((employee) => (
                        <option key={employee?._id} value={employee?.departmentName}>
                          {`${employee?.departmentName}`.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors.departmentName && 'Enter a name of the department'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="departmentType">
                    Department Type *
                  </Label>
                  <div className="mb-2">
                    <select
                      id="departmentType"
                      name="departmentType"
                      className="form-select"
                      {...register('departmentType', { required: true })}
                      required
                    >
                      {' '}
                      <option>SELECT A DEPARTMENT TYPE</option>
                      {customDepartment?.customDepartment?.map((employee) => (
                        <option key={employee?._id} value={employee?.departmentType}>
                          {`${employee?.departmentType}`.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="text-danger">
                    {errors.departmentType && 'Enter a type of the department'}
                  </span>
                </FormGroup>

                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="departmentManager">
                    Department Manager *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('departmentManager', {
                        required: true,
                      })}
                      className="form-control m-0 "
                    />
                  </div>
                  <span className="text-danger">
                    {errors.departmentManager && 'Enter a name of the manager.'}
                  </span>
                </FormGroup>
              </div>

              <div className="d-flex  justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="departmentLead">
                    Department Lead *
                  </Label>
                  <div className="mb-2">
                    <select
                      id="departmentLead"
                      name="departmentLead"
                      className="form-select"
                      {...register('departmentLead', { required: true })}
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
                  <span className="text-danger">
                    {errors.departmentLead && 'Please select value.'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-50 ">
                  <Label className="control-Label text-start" htmlFor="employees">
                    Select Employees *
                  </Label>
                  <div className="mb-2">
                    <Select
                      {...register('employees', { required: true })}
                      options={options}
                      onChange={handleChange}
                      value={selectedEmployee}
                      isMulti
                    />
                  </div>
                  <span className="text-danger">{errors.employees && 'Please select value.'}</span>
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
