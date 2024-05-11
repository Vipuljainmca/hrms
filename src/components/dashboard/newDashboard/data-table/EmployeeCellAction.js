import { SlOptions } from 'react-icons/sl';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import useEmployeeData from '../../../../store/dashboard/employee/useEmployeeData';
import { convertDate } from '../../../../utils/format-time';

const EmployeeCellAction = ({ data }) => {
  const navigation = useNavigate();
  const { employeeData, deleteEmployee } = useEmployeeData();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const togglePopup = () => setModal(!modal);

  const singleEmployeeData = employeeData?.employee?.filter(
    (singleEmployee) => singleEmployee?._id === data,
  )[0];

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const deleteHandleClick = () => {
    deleteEmployee(singleEmployeeData?._id);
  };

  // Add delete functionality

  function clickHandler(action) {
    if (action === 'update') {
      const { personalDetails, officialDetails, bankDetails, leavesDetails, documentStatus } =
        singleEmployeeData;
      const {
        emergencyContactInformation: { name, relationship, phone },
        candidateName,
        gender,
        image,
        dateOfBirth,
        originalBirthDay,
        martialStatus,
        contactNumber,
        bloodGroup,
        emailAddress,
        fathersName,
        aadharNumber,
        panNumber,
        presentAddress,
        permanentAddress,
      } = personalDetails;
      const {
        employeeId,
        idCardExpirationDate,
        designation,
        department,
        grade,
        joiningDate,
        grossSalary,
        officialEmailAddress,
        officialNumber,
        lastDayOfWorking,
        activeEmployee,
      } = officialDetails;
      const { bankName, accountNumber, ifscCode } = bankDetails;
      const {
        casualLeave,
        sickLeave,
        earnedLeave,
        leaveBalance,
        maternityLeave,
        paternityLeave,
        beareavementLeave,
      } = leavesDetails;
      const {
        aadharCard,
        panCard,
        photo,
        tenthMarksheetCertificate,
        tweleveMarksheetCertificate,
        graduationMarksheetCertificate,
        mastersMarksheetCertificate,
        relievingLetter,
        experienceLetter,
        salarySlip,
        policyAcknowledgement,
        idType,
        idStatus,
      } = documentStatus;

      const formateData = {
        id: singleEmployeeData?._id,
        personalDetails: {
          emergencyContactInformation: {
            name,
            relationship,
            phone,
          },
          candidateName,
          gender,
          image: image ?? '',
          dateOfBirth: convertDate(dateOfBirth),
          originalBirthDay: convertDate(originalBirthDay),
          martialStatus,
          contactNumber,
          bloodGroup,
          emailAddress,
          fathersName,
          aadharNumber,
          panNumber,
          presentAddress,
          permanentAddress,
        },
        officialDetails: {
          employeeId,
          idCardExpirationDate,
          designation,
          department,
          grade,
          joiningDate: convertDate(joiningDate),
          grossSalary,
          officialEmailAddress,
          officialNumber,
          lastDayOfWorking,
          activeEmployee,
        },
        bankDetails: {
          bankName,
          accountNumber,
          ifscCode,
        },
        leavesDetails: {
          casualLeave,
          sickLeave,
          earnedLeave,
          leaveBalance,
          maternityLeave,
          paternityLeave,
          beareavementLeave,
        },
        documentStatus: {
          aadharCard,
          panCard,
          photo,
          tenthMarksheetCertificate,
          tweleveMarksheetCertificate,
          graduationMarksheetCertificate,
          mastersMarksheetCertificate,
          relievingLetter,
          experienceLetter,
          salarySlip,
          policyAcknowledgement,
          idType,
          idStatus,
        },
      };
      navigation('/addEmployee', { state: formateData });
    }
  }

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="left">
        <DropdownToggle
          caret
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'transparent',
          }}
        >
          <SlOptions style={{ color: 'black', fontSize: '1.1rem' }} />
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>Action</DropdownItem>
          <DropdownItem
            className="my-2 d-flex justify-content-evenly "
            onClick={() => clickHandler('update')}
          >
            <div>
              <BiSolidEdit style={{ fontSize: '1.2rem' }} />
            </div>
            <div>Update</div>
          </DropdownItem>
          <DropdownItem className="my-2 d-flex justify-content-evenly " onClick={togglePopup}>
            <div>
              <MdDeleteOutline style={{ fontSize: '1.2rem' }} />
            </div>
            <div>Delete</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Delete popup */}
      <div>
        <Modal isOpen={modal} toggle={togglePopup} centered={modal}>
          <ModalBody>
            <p className="fs-3">Are you sure?</p>
            <p className="fs-5 fw-normal">
              {' '}
              This action cannot be undone. This will permanently delete the data from the servers.
            </p>
            <div className="d-flex justify-content-end">
              <div className="m-2">
                <Button color="success" onClick={togglePopup}>
                  Cancel
                </Button>
              </div>
              <div className="m-2">
                <Button color="danger" onClick={deleteHandleClick}>
                  Delete
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

EmployeeCellAction.propTypes = {
  data: PropTypes.string,
};

export default EmployeeCellAction;
