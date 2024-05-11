import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'reactstrap';
import DataTable from '../../../components/dashboard/newDashboard/data-table/DataTable';
import useCustomDepartment from '../../../store/dashboard/customDepartment/useCustomDepartment';

export default function DepartmentView() {
  const {
    customDepartment: { customDepartment },
  } = useCustomDepartment();

  const [department, setDepartment] = useState('Marketing');

  const departmentData = customDepartment?.filter((dep) => dep?.departmentName === department);

  const formattedData = departmentData?.map((employee) => ({
    id: employee?._id,
    department: employee?.departmentName ? employee?.departmentName?.toUpperCase() : 'N/A',
    candidateName: employee?.departmentLead?.personalDetails?.candidateName
      ? employee?.departmentLead?.personalDetails?.candidateName?.toUpperCase()
      : 'N/A',
    designation: employee?.departmentLead?.officialDetails?.designation
      ? employee?.departmentLead?.officialDetails?.designation?.toUpperCase()
      : 'N/A',
    departmentManager: employee?.departmentManager
      ? employee?.departmentManager?.toUpperCase()
      : 'N/A',
    employees: employee?.employees?.map((emp) => emp?.personalDetails?.candidateName)
      ? employee?.employees?.map((emp) => emp?.personalDetails?.candidateName)
      : 'N/A',
  }));
  const columns = [
    {
      accessorKey: 'department',
      header: 'Department',
    },
    {
      accessorKey: 'candidateName',
      header: 'Department Lead',
    },
    {
      accessorKey: 'designation',
      header: 'Designation',
    },
    {
      accessorKey: 'departmentManager',
      header: 'Department Manager',
    },
    {
      accessorKey: 'employees',
      header: 'Employees',
    },
  ];

  return (
    <div>
      <div>
        <div className="d-flex m-1">
          <div className="custom-container gap-2">
            {customDepartment?.map((val) => (
              <Button
                key={val?._id}
                color="primary"
                onClick={() => setDepartment(val?.departmentName)}
              >
                {val?.departmentName.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
        <br />
        <div className="d-flex m-1 gap-2">
          <div className="custom-container">
            <Button className="bg-success">
              <Link to="/addDepartment" style={{ textDecoration: 'none', color: 'white' }}>
                Add Department
              </Link>
            </Button>
          </div>
          <div className="custom-container">
            <Button className="bg-success">
              <Link to="/updateDepartment" style={{ textDecoration: 'none', color: 'white' }}>
                Update Department
              </Link>
            </Button>
          </div>
        </div>
        <br />
      </div>
      <DataTable columns={columns} data={formattedData ?? []} />
    </div>
  );
}
