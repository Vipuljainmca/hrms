import { Link } from 'react-router-dom';
import OverviewCard from '../../components/dashboard/newDashboard/OverviewCard/OverviewCard';
import DataTable from '../../components/dashboard/newDashboard/data-table/DataTable';
import { fullDate } from '../../utils/formattedDate';
import ProgressCard from '../../components/dashboard/newDashboard/progressCard/ProgressCard';
import useAttendanceData from '../../store/dashboard/attendance/useAttendance';
import useEmployeeData from '../../store/dashboard/employee/useEmployeeData';
import { fDate, formatDateInTime, formatSeconds } from '../../utils/format-time';

export default function Dashboard() {
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
      accessorKey: 'date',
      header: 'Date',
    },
    {
      accessorKey: 'loggedInTime',
      header: 'Login Time',
    },
    {
      accessorKey: 'loggedOutTime',
      header: 'Logout Time',
    },
    {
      accessorKey: 'duration',
      header: 'Duration Time',
    },
    // Add more columns as needed
  ];

  const { sameDayDateRange } = fullDate();

  const { attendanceData } = useAttendanceData(sameDayDateRange);

  const { employeeData } = useEmployeeData();

  const formattedData = attendanceData?.attendance?.map((employee) => ({
    id: employee?._id,
    employeeId: employee?.officialDetails?.employeeId,
    candidateName: employee?.candidateName?.toUpperCase(),
    designation: employee?.officialDetails?.designation?.toUpperCase(),
    department: employee?.officialDetails?.department.toUpperCase(),
    status: employee?.attendance[0]?.status === 'present' ? 'PRESENT' : 'ABSENT',
    date: fDate(employee?.attendance[0]?.date),
    loggedInTime: employee?.attendance[0]?.loggedInTime
      ? formatDateInTime(employee?.attendance[0]?.loggedInTime)
      : 'N/A',
    loggedOutTime: employee?.attendance[0]?.loggedOutTime
      ? formatDateInTime(employee?.attendance[0]?.loggedOutTime)
      : 'N/A',
    duration: employee?.attendance[0]?.durationInSeconds
      ? formatSeconds(employee?.attendance[0]?.durationInSeconds)
      : 'logout first',
  }));

  return (
    <>
      {' '}
      <div className="custom-container gap-2">
        <Link to="/employee" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard
            percentage={100}
            count={employeeData?.employee?.length ?? 0}
            status="EMPLOYEES"
          />
        </Link>
        <Link to="/department" style={{ textDecoration: 'none', color: 'black' }}>
          <ProgressCard percentage={10} count={5} status="DEPARTEMENTS" />
        </Link>
        <ProgressCard percentage={80} count={1} status="MALE" />
        <ProgressCard percentage={20} count={2} status="FEMALE" />
        <ProgressCard percentage={20} count={3} status="ACTIVE" />
      </div>
      <div className="mt-5 mb-5">
        <OverviewCard />
      </div>
      <DataTable columns={columns} data={formattedData ?? []} />
    </>
  );
}
