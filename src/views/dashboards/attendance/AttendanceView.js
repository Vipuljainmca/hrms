import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
import ProgressCard from '../../../components/dashboard/newDashboard/progressCard/ProgressCard';
import EmployeeCalendarData from '../../../components/dashboard/newDashboard/NewEmployee/EmployeeCalendarData';
import DataTable from '../../../components/dashboard/newDashboard/data-table/DataTable';
import { fullDate } from '../../../utils/formattedDate';
import useAttendanceData from '../../../store/dashboard/attendance/useAttendance';
import useEmployeeData from '../../../store/dashboard/employee/useEmployeeData';
import { fDate, format12HourTime, formatSeconds } from '../../../utils/format-time';
//
const attendanceDefaultField = [
  {
    name: 'employeeId',
    label: 'Enter EmployeeId',
    type: 'text',
  },

  {
    name: 'status',
    label: 'Select Attendance Category',
    type: 'select',
    options: [
      'present',
      'absent',
      'halfday',
      'workFromHome',
      'sickLeave',
      'paidLeave',
      'earnedLeave',
      'holiday',
    ],
  },
];

export default function AttendanceView() {
  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm A'));
  const { sameDayDateRange } = fullDate();

  // const { weeklyStatusData, totalCounts } = useWeeklyAttendanceData();

  const isdisabled = true;
  const { attendanceData, loginAttendance, logoutAttendance } = useAttendanceData(sameDayDateRange);

  const { employeeData } = useEmployeeData();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('hh:mm A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [formData, setFormData] = useState({
    employeeId: '',
    status: 'present',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loggedInTime = attendanceData?.attendance?.filter(
    (at) => at?._id === formData?.employeeId,
  )[0]?.attendance[0]?.loggedInTime;

  const loggedOutTime = attendanceData?.attendance?.filter(
    (at) => at?._id === formData?.employeeId,
  )[0]?.attendance[0]?.loggedOutTime;

  const isUpdatedTrue = loggedInTime && loggedOutTime ? isdisabled : !isdisabled;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const selectedCategory = formData.status;

      if (!attendanceDefaultField[1].options.includes(selectedCategory)) {
        throw new Error('Invalid status selected.');
      }

      if (loggedInTime) {
        logoutAttendance(formData);
      } else {
        loginAttendance(formData);
      }
    } catch (e) {
      console.error('Error adding user:', e.message);
    }
  };

  // const optionspie = {
  //   labels: ['In Time', 'Late', 'Absent', 'Vacation'],
  //   chart: {
  //     id: 'pie-chart',
  //     fontFamily: "'Rubik', sans-serif",
  //   },
  //   dataLabels: {
  //     enabled: true,
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: '70px',
  //       },
  //     },
  //   },
  //   legend: {
  //     show: true,
  //     position: 'bottom',
  //     width: '50px',
  //     fontFamily: "'Montserrat', sans-serif",
  //     labels: {
  //       colors: '#8898aa',
  //     },
  //   },
  //   colors: ['rgb(135, 179, 244)', '#ff7673', '#FFC700', 'rgb(176, 151, 252)'],

  //   tooltip: {
  //     fillSeriesColor: false,
  //     theme: 'dark',
  //   },
  // };

  // const optionscolumn = {
  //   colors: ['rgb(135, 179, 244)', '#ff7673', '#FFC700', 'rgb(176, 151, 252)'],
  //   chart: {
  //     fontFamily: "'Rubik', sans-serif",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       endingShape: 'rounded',
  //       columnWidth: '55%',
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     show: true,
  //     width: 2,
  //     colors: ['transparent'],
  //   },
  //   xaxis: {
  //     categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //     labels: {
  //       style: {
  //         cssClass: 'grey--text lighten-2--text fill-color',
  //       },
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: '(Employees)',
  //       color: '#8898aa',
  //     },
  //     labels: {
  //       style: {
  //         cssClass: 'grey--text lighten-2--text fill-color',
  //       },
  //     },
  //   },
  //   fill: {
  //     opacity: 1,
  //   },
  //   tooltip: {
  //     theme: 'dark',
  //     y: {
  //       formatter(val) {
  //         return val;
  //       },
  //     },
  //   },
  //   grid: {
  //     borderColor: 'rgba(0,0,0,0.1)',
  //   },
  //   legend: {
  //     show: true,
  //     position: 'bottom',
  //     width: '50px',
  //     fontFamily: "'Montserrat', sans-serif",
  //     labels: {
  //       colors: '#8898aa',
  //     },
  //   },
  // };

  // const seriescolumn = [
  //   {
  //     name: 'In Time',
  //     data: [
  //       weeklyStatusData?.Mon.present,
  //       weeklyStatusData?.Tue.present,
  //       weeklyStatusData?.Wed.present,
  //       weeklyStatusData?.Thur.present,
  //       weeklyStatusData?.Fri.present,
  //       weeklyStatusData?.Sat.present,
  //     ],
  //   },
  //   {
  //     name: 'Absent',
  //     data: [
  //       weeklyStatusData?.Mon.absent,
  //       weeklyStatusData?.Tue.absent,
  //       weeklyStatusData?.Wed.absent,
  //       weeklyStatusData?.Thur.absent,
  //       weeklyStatusData?.Fri.absent,
  //       weeklyStatusData?.Sat.absent,
  //     ],
  //   },
  //   {
  //     name: 'Half Day',
  //     data: [
  //       weeklyStatusData?.Mon.halfday,
  //       weeklyStatusData?.Tue.halfday,
  //       weeklyStatusData?.Wed.halfday,
  //       weeklyStatusData?.Thur.halfday,
  //       weeklyStatusData?.Fri.halfday,
  //       weeklyStatusData?.Sat.halfday,
  //     ],
  //   },
  //   {
  //     name: 'Vacation',
  //     data: [0, 0, 0, 0, 0, 0],
  //   },
  // ];

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
  ];

  const formattedData = attendanceData?.attendance?.map((employee) => ({
    id: employee?._id,
    employeeId: employee?.officialDetails?.employeeId,
    candidateName: employee?.candidateName?.toUpperCase(),
    designation: employee?.officialDetails?.designation?.toUpperCase(),
    department: employee?.officialDetails?.department?.toUpperCase(),
    status: employee?.attendance[0]?.status?.toUpperCase(),
    date: fDate(employee?.attendance[0]?.date),
    loggedInTime: employee?.attendance[0]?.loggedInTime
      ? format12HourTime(employee?.attendance[0]?.loggedInTime)
      : 'N/A',
    loggedOutTime: employee?.attendance[0]?.loggedOutTime
      ? format12HourTime(employee?.attendance[0]?.loggedOutTime)
      : 'N/A',
    duration: employee?.attendance[0]?.durationInSeconds
      ? formatSeconds(employee?.attendance[0]?.durationInSeconds)
      : 'logout first',
  }));

  return (
    <div>
      <div className="custom-container d-flex justify-content-between align-items-center">
        <ProgressCard percentage={80} count={100} status="In-Time" />
        <ProgressCard percentage={92} count={100} status="Present" />
        <ProgressCard percentage={20} count={20} status="Absent" />
        <ProgressCard percentage={5} count={1} status="Half Day" />
        <ProgressCard percentage={10} count={1} status="Vacation" />
      </div>

      <form className="d-flex align-items-center gap-2 mb-4 mt-2" onSubmit={handleSubmit}>
        <input
          disabled
          className="p-1 rounded-2 text-white bg-primary"
          style={{ width: '5rem' }}
          value={currentTime}
        />
        <br />
        <select
          id="employeeId"
          name="employeeId"
          className="form-select"
          value={formData?.employeeId}
          onChange={handleChange}
          required
        >
          {' '}
          <option value="All">SELECT A EMPLOYEE</option>
          {employeeData?.employee?.map((employee) => (
            <option key={employee?._id} value={employee?._id}>
              {`${employee?.personalDetails?.candidateName} (${employee?.officialDetails?.employeeId}) (${employee?.officialDetails?.designation})`.toUpperCase()}
            </option>
          ))}
        </select>
        <select
          id="status"
          name="status"
          className={`form-select ${
            (loggedInTime && 'd-none') || (loggedInTime === null && 'd-none')
          }`}
          value={formData.status}
          onChange={handleChange}
          required
        >
          {attendanceDefaultField[1].options.map((option) => (
            <option key={option} value={option}>
              {/[a-z][A-Z]/.test(option)
                ? option.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()
                : option.toUpperCase()}
            </option>
          ))}
        </select>
        <Button
          color="primary"
          disabled={isUpdatedTrue || loggedInTime === null ? isdisabled : !isdisabled}
          type="submit"
        >
          {!loggedInTime ? 'Login' : 'Logout'}
        </Button>
      </form>
      <DataTable columns={columns} data={formattedData ?? []} />
      <br />
      {/* <Row>
        <Col md="6">
          <ComponentCard title="Attendance Pie Chart">
            <Chart
              options={optionspie}
              series={[
                totalCounts?.present ?? 0,
                totalCounts?.absent ?? 0,
                totalCounts?.halfday ?? 0,
                totalCounts?.holiday ?? 0,
              ]}
              type="pie"
              height="300"
            />
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Attendance Bar Chart">
            <Chart options={optionscolumn} series={seriescolumn} type="bar" height="250" />
          </ComponentCard>
        </Col>
      </Row> */}
      <EmployeeCalendarData />
    </div>
  );
}
