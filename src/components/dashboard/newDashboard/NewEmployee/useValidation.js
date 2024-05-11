const useValidation = (Formvalue) => {
  const step1Validation = () => {
    let bool = false;
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
    return (
      step1Validation() &&
      step2Validation() &&
      step3Validation() &&
      step4Validation() &&
      step5Validation()
    );
  };

  return {
    step1Validation,
    step2Validation,
    step3Validation,
    step4Validation,
    step5Validation,
    setp6Validation,
  };
};

export default useValidation;
