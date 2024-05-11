import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { fullDate } from '../../../utils/formattedDate';
import { fDate } from '../../../utils/format-time';
import DataTable from '../../../components/dashboard/newDashboard/data-table/DataTable';
import ProgressCard from '../../../components/dashboard/newDashboard/progressCard/ProgressCard';
import useLeaveData from '../../../store/dashboard/leave/useLeaveData';

export default function LeaveView() {
  const { fullYear } = fullDate();
  const { leaveData } = useLeaveData(fullYear);

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
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'leaveType',
      header: 'Leave Type',
    },
    {
      accessorKey: 'startDate',
      header: 'Start Date',
    },
    {
      accessorKey: 'endDate',
      header: 'End Date',
    },
    {
      accessorKey: 'leaveBalance',
      header: 'Balance',
    },
    {
      accessorKey: 'duration',
      header: 'Duration',
    },

    // Add more columns as needed
  ];

  const formattedData = leaveData?.leave?.map((employee) => ({
    id: employee?.id,
    employeeId: employee?.officialDetails?.employeeId,
    candidateName: employee?.candidateName?.toUpperCase(),
    designation: employee?.officialDetails?.designation.toUpperCase(),
    department: employee?.officialDetails?.department.toUpperCase(),
    status: employee?.status.toUpperCase(),
    leaveType: employee?.leaveType.toUpperCase(),
    startDate: fDate(employee?.startDate),
    endDate: fDate(employee?.endDate),
    leaveBalance: employee?.leaveBalance,
    duration: employee?.duration,
  }));

  return (
    <div>
      <div className="custom-container">
        <Link to="/employee" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard percentage={10} count={leaveData?.leave?.length || 0} status="EMPLOYEES" />
        </Link>
        <Link to="/department" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard percentage={10} count={10} status="DEPARTEMENTS" />
        </Link>
        <ProgressCard percentage={80} count={1} status="MALE" />
        <ProgressCard percentage={20} count={2} status="FEMALE" />
        <ProgressCard percentage={20} count={3} status="ACTIVE" />
      </div>
      <div className="custom-container mb-3">
        <Button className="bg-success">
          <Link to="/addLeave" style={{ textDecoration: 'none', color: 'white' }}>
            Add Leave
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={formattedData ?? []} />
    </div>
  );
}
