/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './single-emp.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { startOfMonth, getYear, getMonth, getDate } from 'date-fns';
import { fDate, format12HourTime, formatSeconds } from '../../../utils/format-time';
import DataTable from '../../../components/dashboard/newDashboard/data-table/DataTable';
import useEmployeeData from '../../../store/dashboard/employee/useEmployeeData';
import useAttendanceData from '../../../store/dashboard/attendance/useAttendance';

export default function SingleEmployee() {
  const location = useLocation();
  const today = new Date();
  const startOfMonthDate = startOfMonth(today); // Start of current month

  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: startOfMonthDate,
      endDate: today,
      key: 'selection', // required for react-date-range
    },
  ]);
  const { startDate, endDate } = selectedDateRange[0];

  const getDates = {
    startYear: getYear(startDate),
    startMonth: getMonth(startDate) + 1,
    startDay: getDate(startDate),
    endYear: getYear(endDate),
    endMonth: getMonth(endDate) + 1,
    endDay: getDate(endDate),
  };

  const handleDateChange = useCallback(
    (ranges) => {
      const newDateRange = [ranges.selection];
      setSelectedDateRange(newDateRange);
    },
    [selectedDateRange],
  );

  const { id } = useParams();
  const { employeeData } = useEmployeeData();

  const singleFilteredEmployee = employeeData?.employee?.filter((emp) => emp?._id === id);

  const { isLoading, attendanceData } = useAttendanceData(getDates);

  const columns = [
    {
      accessorKey: 'date',
      header: 'DATE',
    },
    {
      accessorKey: 'status',
      header: 'STATUS',
    },
    {
      accessorKey: 'loggedInTime',
      header: 'LOGIN TIME',
    },
    {
      accessorKey: 'loggedOutTime',
      header: 'LOGOUT TIME',
    },
    {
      accessorKey: 'duration',
      header: 'DURATION',
    },
  ];

  const SingleEmployeeAttendance = attendanceData?.attendance
    ?.filter((attendance) => attendance?._id === id)
    .map((attendance) => attendance?.attendance)
    .flat(1);

  const formattedData = SingleEmployeeAttendance?.map((employee) => {
    return {
      id: employee?.attendance?._id,
      date: fDate(employee?.date),
      status: employee?.status?.toUpperCase(),
      loggedInTime: employee?.loggedInTime ? format12HourTime(employee?.loggedInTime) : 'N/A',
      loggedOutTime: employee?.loggedOutTime ? format12HourTime(employee?.loggedOutTime) : 'N/A',
      duration: employee?.durationInSeconds
        ? formatSeconds(employee?.durationInSeconds)
        : 'logout first',
    };
  });

  const hideSeachbar = location.pathname.split('/')[1] === 'employee';

  return (
    <>
      {singleFilteredEmployee?.map((emp) => (
        <div className="d-flex flex-wrap justify-content-between mt-3" key={emp?._id}>
          <div className="employee-data pl-0">
            <div className="card rounded-3 shadow-sm px-4 py-5">
              <h3 className="d-flex justify-content-center text-success py-4">Employee Details</h3>
              <div className="employee-picture">
                <div className="d-flex justify-content-evenly card-body">
                  <img
                    className="profile-img"
                    src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    alt="profile"
                  />
                  <div className="d-flex-coloum employee-detail-and-name">
                    <p className="employee-name">
                      <b>{emp?.personalDetails?.candidateName}</b>
                    </p>
                    <p className="employee-main-detail">
                      Emp ID : {emp?.officialDetails?.employeeId}
                    </p>
                    <p className="employee-main-detail">
                      Ph : {emp?.personalDetails?.contactNumber}
                    </p>
                    <p className="employee-main-detail"> {emp?.personalDetails?.emailAddress}</p>
                  </div>
                </div>
                <div className="d-flex m-5 flex-wrap">
                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Designation</p>
                      <p className="feild-detail">{emp?.officialDetails?.designation}</p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Blood Group</p>
                      <p className="feild-detail">{emp?.personalDetails?.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Department</p>
                      <p className="feild-detail">{emp?.officialDetails?.department}</p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Address</p>
                      <p className="feild-detail">{emp?.personalDetails?.presentAddress}</p>
                    </div>
                  </div>
                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Salary</p>
                      <p className="feild-detail">{emp?.officialDetails?.grossSalary}</p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Gender</p>
                      <p className="feild-detail">{emp?.personalDetails?.gender}</p>
                    </div>
                  </div>

                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Emergency Contact</p>
                      <p className="feild-detail">
                        {emp?.personalDetails?.emergencyContactInformation?.name}
                      </p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Emergency Contact No</p>
                      <p className="feild-detail">
                        {emp?.personalDetails?.emergencyContactInformation?.phone}
                      </p>
                    </div>
                  </div>

                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Date Of Birth</p>
                      <p className="feild-detail">{fDate(emp?.personalDetails?.dateOfBirth)}</p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Date Of Joinig</p>
                      <p className="feild-detail">{fDate(emp?.officialDetails?.joiningDate)}</p>
                    </div>
                  </div>

                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Active Employee</p>
                      <p className="feild-detail">
                        {emp?.officialDetails?.activeEmployee === true ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Balance</p>
                      <p className="feild-detail">{emp?.leavesDetails?.leaveBalance}</p>
                    </div>
                  </div>

                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Data</p>
                      <p className="feild-detail">
                        Sick Leave : {emp?.leavesDetails?.sickLeave ?? 0}
                      </p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Balance</p>
                      <p className="feild-detail">
                        Casual Leave : {emp?.leavesDetails?.casualLeave ?? 0}
                      </p>
                    </div>
                  </div>

                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Data</p>
                      <p className="feild-detail">
                        Paternity Leave : {emp?.leavesDetails?.paternityLeave ?? 0}
                      </p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Balance</p>
                      <p className="feild-detail">
                        Beareavement Leave : {emp?.leavesDetails?.beareavementLeave ?? 0}
                      </p>
                    </div>
                  </div>
                  <div className="employee-personal-information">
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Data</p>
                      <p className="feild-detail">
                        Earned Leave : {emp?.leavesDetails?.earnedLeave ?? 0}
                      </p>
                    </div>
                    <div className="single-user-head-detail">
                      <p className="feild-head">Leave Balance</p>
                      <p className="feild-detail">
                        Maternity Leave : {emp?.leavesDetails?.maternityLeave ?? 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="card rounded-3 shadow-sm px-4 py-5">
              <DateRangePicker ranges={selectedDateRange} onChange={handleDateChange} />
              {isLoading && <div>Loading...</div>}
              <DataTable columns={columns} data={formattedData ?? []} hideSeachbar={hideSeachbar} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
