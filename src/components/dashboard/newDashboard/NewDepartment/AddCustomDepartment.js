import React from 'react';
import { Row, Col, FormGroup, Label, Card } from 'reactstrap';
import Form from 'react-validation/build/form';
import { useForm } from 'react-hook-form';
import useCustomDepartment from '../../../../store/dashboard/customDepartment/useCustomDepartment';

export default function AddDepartmentForm() {
  const { createCustomDepartment } = useCustomDepartment();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createCustomDepartment(data);
    console.log(data);
  };

  return (
    <Card className="rounded-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm="12">
            <div title="Form Validation" className="w-50 m-auto mt-2">
              <div className="d-flex justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label className="control-Label text-start" htmlFor="departmentName">
                    Department Name *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('departmentName', {
                        required: true,
                      })}
                      className="form-control m-0"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.departmentName && 'Enter a name of the department'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label className="control-Label text-start" htmlFor="departmentType">
                    Department Type *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('departmentType', {
                        required: true,
                      })}
                      className="form-control m-0 "
                    />
                  </div>
                  <span className="text-danger">
                    {errors.departmentType && 'Enter a type of department'}
                  </span>
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
