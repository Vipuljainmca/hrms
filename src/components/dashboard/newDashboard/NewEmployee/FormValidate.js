import React, { useState } from 'react';
import { Row, Col, Button, FormGroup, Label, Card } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-validation/build/form';

const FormValidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(register);
  const [Formvalue, setFormvalue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    title: '',
    mobile: '',
  });
  const onSubmit = (data) => {
    setFormvalue(data);
  };
  console.log(Formvalue);

  return (
    <>
      <Row>
        <Col sm="12">
          <Card title="Form Validation" className="w-50 m-auto p-4 mt-2">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2 w-50">
                  <Label className="control-Label mb-0 text-start" htmlFor="firstname">
                    First name *
                  </Label>
                  <div className="">
                    <input
                      placeholder="First Name"
                      type="text"
                      {...register('firstname', { required: true })}
                      className="form-control  border-secondary"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.firstname && 'First name is required.'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label className="control-Label text-start mb-0" htmlFor="lastname">
                    Last name *
                  </Label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="last name"
                      {...register('lastname', { required: true })}
                      className="form-control border-secondary"
                    />
                  </div>
                  <span className="text-danger">{errors.lastname && 'Last name is required.'}</span>
                </FormGroup>
              </div>

              <div className="d-flex  justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2">
                  <Label className="control-Label text-start mb-0" htmlFor="username">
                    Username *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('username', { required: true })}
                      className="form-control border-secondary "
                    />
                  </div>
                  <span className="text-danger">{errors.username && 'Username is required.'}</span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-50 ">
                  <Label className="control-Label text-start mb-0" htmlFor="email">
                    Email *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('usernemailame', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="form-control border-secondary"
                    />
                  </div>
                  <span className="text-danger">{errors.email && 'Email is required.'}</span>
                </FormGroup>
              </div>

              <div className="d-flex justify-content-start">
                <FormGroup className="d-flex flex-column m-2 gap-2  ">
                  <Label className="control-Label text-start" htmlFor="mobile">
                    Mobile No *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="text"
                      {...register('mobile', {
                        required: true,
                        maxLength: 11,
                        minLength: 8,
                      })}
                      className="form-control border-secondary"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.mobile && 'Enter a Valid mobile number.'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="age">
                    Age *
                  </Label>
                  <div className="mb-2">
                    <input
                      type="number"
                      {...register('age', { required: true, pattern: /\d+/ })}
                      className="form-control border-secondary"
                    />
                  </div>
                  <span className="text-danger">
                    {errors.age && 'Please enter number for age.'}
                  </span>
                </FormGroup>
                <FormGroup className="d-flex flex-column m-2 gap-2 w-25 ">
                  <Label className="control-Label text-start" htmlFor="title">
                    Select Gender *
                  </Label>
                  <div className="mb-2">
                    <select
                      className="form-control border-secondary"
                      {...register('title', { required: true })}
                    >
                      <option value="">Select Option</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                    </select>
                  </div>
                  <span className="text-danger">{errors.title && 'Please select value.'}</span>
                </FormGroup>
              </div>
              <FormGroup>
                <Button className="button btn-info" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FormValidate;
