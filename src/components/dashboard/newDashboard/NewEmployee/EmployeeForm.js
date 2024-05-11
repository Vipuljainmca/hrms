// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from 'react-router';
import React, { useState } from 'react';
import StepZilla from 'react-stepzilla';
import './step/steps.css';
import { useForm } from 'react-hook-form';
import Form from 'react-validation/build/form';
import { Card } from 'reactstrap';
import { PersonalInfo, OfficalInfo, BankInfo, LeaveInfo, DocumentsStatus, Done } from './index';
import './EmpForm.css';

export default function EmployeeForm() {
  const location = useLocation();
  const employeeData = location.state;

  // const employeeDetails = {
  //   personalDetails: {
  //     emergencyContactInformation: {
  //       name: 'John Doe',
  //       relationship: 'Spouse',
  //       phone: '1234567890',
  //     },
  //     candidateName: 'John Doe',
  //     gender: 'male',
  //     dateOfBirth: '1990-01-01',
  //     originalBirthDay: '1990-01-01',
  //     martialStatus: 'Single',
  //     contactNumber: '9876543210',
  //     bloodGroup: 'A+',
  //     emailAddress: 'john.doe@example.com',
  //     fathersName: 'Doe Father',
  //     aadharNumber: 123456789012,
  //     panNumber: 'ABCDE1234F',
  //     presentAddress: '123 Main Street, City, Country',
  //     permanentAddress: '456 Second Avenue, Town, Country',
  //   },
  //   officialDetails: {
  //     employeeId: 'EMP123456',
  //     idCardExpirationDate: '2025-12-31',
  //     designation: 'Software Engineer',
  //     department: 'development',
  //     grade: 'A',
  //     joiningDate: '2022-01-01',
  //     grossSalary: '50000',
  //     officialEmailAddress: 'john.doe@company.com',
  //     officialNumber: '0987654321',
  //     lastDayOfWorking: '',
  //     activeEmployee: true,
  //   },
  //   bankDetails: {
  //     bankName: 'Example Bank',
  //     accountNumber: '1234567890',
  //     ifscCode: 'EXMP0123456',
  //   },
  //   leavesDetails: {
  //     casualLeave: '10',
  //     sickLeave: '5',
  //     earnedLeave: '15',
  //     leaveBalance: '30',
  //     maternityLeave: '60',
  //     paternityLeave: '15',
  //     beareavementLeave: '5',
  //   },
  //   documentStatus: {
  //     aadharCard: '',
  //     panCard: '',
  //     photo: '',
  //     tenthMarksheetCertificate: '',
  //     tweleveMarksheetCertificate: '',
  //     graduationMarksheetCertificate: '',
  //     mastersMarksheetCertificate: '',
  //     relievingLetter: '',
  //     experienceLetter: '',
  //     salarySlip: '',
  //     policyAcknowledgement: true,
  //     idType: 'Temporary',
  //     idStatus: 'Assigned',
  //   },
  // };

  const defaultEmployeeDetails = {
    personalDetails: {
      emergencyContactInformation: {
        name: '',
        relationship: '',
        phone: '',
      },
      candidateName: '',
      gender: '',
      image: '',
      dateOfBirth: '',
      originalBirthDay: '',
      martialStatus: '',
      contactNumber: '',
      bloodGroup: '',
      emailAddress: '',
      fathersName: '',
      aadharNumber: '',
      panNumber: '',
      presentAddress: '',
      permanentAddress: '',
    },
    officialDetails: {
      employeeId: '',
      idCardExpirationDate: '',
      designation: '',
      department: '',
      grade: '',
      joiningDate: '',
      grossSalary: '',
      officialEmailAddress: '',
      officialNumber: '',
      lastDayOfWorking: '',
      activeEmployee: '',
    },
    bankDetails: {
      bankName: '',
      accountNumber: '',
      ifscCode: '',
    },
    leavesDetails: {
      casualLeave: '',
      sickLeave: '',
      earnedLeave: '',
      leaveBalance: '',
      maternityLeave: '',
      paternityLeave: '',
      beareavementLeave: '',
    },
    documentStatus: {
      aadharCard: '',
      panCard: '',
      photo: '',
      tenthMarksheetCertificate: '',
      tweleveMarksheetCertificate: '',
      graduationMarksheetCertificate: '',
      mastersMarksheetCertificate: '',
      relievingLetter: '',
      experienceLetter: '',
      salarySlip: '',
      policyAcknowledgement: '',
      idType: '',
      idStatus: '',
    },
  };

  const [Formvalue, setFormvalue] = useState(defaultEmployeeDetails);

  const step1Validation = () => {
    let bool = false;
    console.log('step1 validation run');
    if (
      Formvalue?.personalDetails?.emergencyContactInformation?.phone &&
      Formvalue?.personalDetails?.candidateName &&
      Formvalue?.personalDetails?.gender &&
      Formvalue?.personalDetails?.dateOfBirth &&
      Formvalue?.personalDetails?.originalBirthDay &&
      Formvalue?.personalDetails?.martialStatus &&
      Formvalue?.personalDetails?.contactNumber &&
      Formvalue?.personalDetails?.bloodGroup &&
      Formvalue?.personalDetails?.emailAddress &&
      Formvalue?.personalDetails?.fathersName &&
      Formvalue?.personalDetails?.aadharNumber &&
      Formvalue?.personalDetails?.panNumber &&
      Formvalue?.personalDetails?.presentAddress &&
      Formvalue?.personalDetails?.permanentAddress
    ) {
      bool = true;
    }
    return bool;
  };

  const step2Validation = () => {
    let bool = false;
    if (
      Formvalue?.officialDetails?.employeeId &&
      Formvalue?.officialDetails?.designation &&
      Formvalue?.officialDetails?.department &&
      Formvalue?.officialDetails?.grade &&
      Formvalue?.officialDetails?.joiningDate &&
      Formvalue?.officialDetails?.grossSalary &&
      Formvalue?.officialDetails?.activeEmployee
    ) {
      bool = true;
    }
    return bool;
  };

  const step3Validation = () => {
    let bool = false;
    if (
      Formvalue?.bankDetails?.bankName &&
      Formvalue?.bankDetails?.accountNumber &&
      Formvalue?.bankDetails?.ifscCode
    ) {
      bool = true;
    }
    return bool;
  };

  const step4Validation = () => {
    let bool = false;
    if (
      Formvalue?.leavesDetails?.casualLeave &&
      Formvalue?.leavesDetails?.sickLeave &&
      Formvalue?.leavesDetails?.earnedLeave &&
      Formvalue?.leavesDetails?.maternityLeave &&
      Formvalue?.leavesDetails?.paternityLeave &&
      Formvalue?.leavesDetails?.beareavementLeave
    ) {
      bool = true;
    }
    return bool;
  };

  const step5Validation = () => {
    let bool = false;
    if (
      Formvalue?.documentStatus?.policyAcknowledgement &&
      Formvalue?.documentStatus?.idType &&
      Formvalue?.documentStatus?.idStatus
    ) {
      bool = true;
    }
    return bool;
  };

  const setp6Validation = () => {
    let bool = false;
    if (
      step1Validation() &&
      step2Validation() &&
      step3Validation() &&
      step3Validation() &&
      step4Validation() &&
      step5Validation()
    ) {
      bool = true;
    }
    return bool;
  };

  const validation = {
    step1: step1Validation,
    step2: step2Validation,
    step3: step3Validation,
    step4: step4Validation,
    step5: step5Validation,
    step6: setp6Validation,
  };
  console.log(employeeData);

  const onSubmit = (data) => {
    console.log(data);
    setFormvalue(data);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ defaultValues: employeeData ?? defaultEmployeeDetails });

  const steps = [
    {
      name: 'Personal Info',
      component: (
        <PersonalInfo
          validation={validation}
          Formvalue={Formvalue}
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setFormvalue={setFormvalue}
        />
      ),
    },
    {
      name: 'Official Info',
      component: (
        <OfficalInfo
          validation={validation}
          setFormvalue={setFormvalue}
          Formvalue={Formvalue}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      name: 'Bank Info',
      component: (
        <BankInfo
          validation={validation}
          Formvalue={Formvalue}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      name: 'Leave Info',
      component: (
        <LeaveInfo
          validation={validation}
          Formvalue={Formvalue}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      name: 'Documents Status',
      component: (
        <DocumentsStatus
          validation={validation}
          Formvalue={Formvalue}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      name: 'Done',

      component: (
        <Done
          validation={validation}
          Formvalue={Formvalue}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          update={employeeData && true}
        />
      ),
    },
  ];

  return (
    <div style={{ margin: '33.125px 0', minHeight: '560px' }}>
      <Card className="step-progress rounded-3 h-100">
        <div className="w-100 m-auto">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StepZilla steps={steps} nextButtonCls="d-none" backButtonCls="d-none" />
            {/* <StepZilla steps={steps} /> */}
          </Form>
        </div>
      </Card>
    </div>
  );
}
