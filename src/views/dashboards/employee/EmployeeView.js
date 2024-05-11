import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fDate } from '../../../utils/format-time';
import DataTable from '../../../components/dashboard/newDashboard/data-table/DataTable';
import ProgressCard from '../../../components/dashboard/newDashboard/progressCard/ProgressCard';
import useEmployeeData from '../../../store/dashboard/employee/useEmployeeData';
import EmployeeCellAction from '../../../components/dashboard/newDashboard/data-table/EmployeeCellAction';

export default function EmployeeView() {
  const { employeeData } = useEmployeeData();
  const columns = [
    {
      accessorKey: 'employeeId',
      header: 'Employee ID',
    },
    {
      accessorKey: 'candidateName',
      header: 'Name',
    },
    {
      accessorKey: 'designation',
      header: 'Designation',
    },
    {
      accessorKey: 'department',
      header: 'Department',
    },
    {
      accessorKey: 'emailAddress',
      header: 'Email',
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Mobile No.',
    },
    {
      accessorKey: 'joiningDate',
      header: 'Date Of Joining',
    },
    {
      accessorKey: 'dateOfBirth',
      header: 'DOB',
    },
    {
      accessorKey: 'activeEmployee',
      header: 'Active/Inactive',
    },
    {
      id: 'actions',
      cell: ({ row }) => <EmployeeCellAction data={row?.original?.id} />,
    },
  ];

  const male = employeeData?.employees?.filter((e) => e.gender === 'male').length;
  const female = employeeData?.employees?.filter((e) => e.gender === 'female').length;
  const active = employeeData?.employees?.filter((e) => e.activeEmployee === true).length;

  const formattedData = employeeData?.employee?.map((employee) => ({
    id: employee?._id,
    employeeId: employee?.officialDetails?.employeeId,
    candidateName: employee?.personalDetails?.candidateName?.toUpperCase(),
    designation: employee?.officialDetails?.designation?.toUpperCase(),
    department: employee?.officialDetails?.department?.toUpperCase(),
    emailAddress: employee?.personalDetails?.emailAddress,
    gender: employee?.personalDetails?.gender?.toUpperCase(),
    phoneNumber: employee?.personalDetails?.contactNumber,
    joiningDate: fDate(employee?.officialDetails?.joiningDate),
    dateOfBirth: fDate(employee?.personalDetails?.dateOfBirth),
    activeEmployee: employee?.officialDetails?.activeEmployee === true ? 'ACTIVE' : 'INACTIVE',
  }));

  return (
    <div>
      <div className="custom-container">
        <Link to="/attendance" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard
            percentage={(employeeData?.results * 100) / employeeData?.results || 0}
            count={employeeData?.results ? employeeData?.results : 0}
            status="Attendance"
          />
        </Link>
        <Link to="/department" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard
            percentage={
              (employeeData?.totalUniqueDepartments * 100) / employeeData?.totalUniqueDepartments ||
              0
            }
            count={employeeData?.totalUniqueDepartments || 0}
            status="DEPARTEMENTS"
          />
        </Link>
        <ProgressCard percentage={80} count={male || 0} status="MALE" />
        <ProgressCard percentage={20} count={female || 0} status="FEMALE" />
        <ProgressCard percentage={20} count={active || 0} status="ACTIVE-EMP" />
      </div>
      <div className="custom-container mb-3">
        <Button className="bg-success">
          <Link to="/addEmployee" style={{ textDecoration: 'none', color: 'white' }}>
            Add Employee
          </Link>
        </Button>
      </div>{' '}
      <DataTable columns={columns} data={formattedData ?? []} />
    </div>
  );
}
