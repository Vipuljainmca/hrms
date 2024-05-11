import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { DeleteAttendance, setAttendanceData } from './attendanceSlice';

export default function useAttendanceData(date) {
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/attendance/allByDate?startYear=${date.startYear}&startMonth=${date.startMonth}&startDay=${date.startDay}&endYear=${date.endYear}&endMonth=${date.endMonth}&endDay=${date.endDay}`,
    );
    const apiData = await response.data;
    return apiData;
  }, [date]);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['attendance', date],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) dispatch(setAttendanceData(data || []));
  }, [data, dispatch]);

  const attendanceData = useSelector((state) => state?.attendanceReducer?.attendanceData);

  const loginAttendance = async (newEmployee) => {
    try {
      const singleEmployee = attendanceData?.attendance?.filter(
        (at) => at?._id === newEmployee?.employeeId,
      )[0]?.candidateName;
      console.log('AddAttendance:', newEmployee);

      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/attendance/login/${newEmployee?.employeeId}`,
        newEmployee,
      );

      if (singleEmployee) toast.success(`${singleEmployee} LoggedIn Successfully!`);
      else toast.success(`Employee LoggedIn Successfully!`);
      refetch();
    } catch (err) {
      toast.success(`${err?.response?.data?.message}`);
      console.log('Error adding attendance:', err);
    }
  };

  const logoutAttendance = async (newEmployee) => {
    try {
      const singleEmployee = attendanceData?.attendance?.filter(
        (at) => at?._id === newEmployee?.employeeId,
      )[0]?.candidateName;
      console.log('LogoutAttendance:', newEmployee);

      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/attendance/logout/${newEmployee?.employeeId}`,
        newEmployee,
      );
      if (singleEmployee) toast.success(`${singleEmployee} LoggedOut Successfully!`);
      else {
        toast.success(`Employee LoggedOut Successfully!`);
      }
      refetch();
    } catch (err) {
      toast.success(`${err?.response?.data?.error}`);
      console.log('Error adding attendance:', err);
    }
  };

  const deleteAttendance = async (newEmployee) => {
    dispatch(DeleteAttendance(newEmployee)); // Update Redux store
  };

  return {
    attendanceData,
    isLoading,
    error,
    refetch,
    loginAttendance,
    logoutAttendance,
    deleteAttendance,
  };
}

useAttendanceData.propTypes = {
  date: PropTypes.object,
};
