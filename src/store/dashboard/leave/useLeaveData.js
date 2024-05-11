import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setLeaveData } from './leaveSlice';

export default function useLeaveData(date) {
  const navigate = useNavigate();
  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/leave?startYear=${date.startYear}&startMonth=${date.startMonth}&startDay=${date.startDay}&endYear=${date.endYear}&endMonth=${date.endMonth}&endDay=${date.endDay}`,
    );
    const apiData = await response.data;
    if (apiData?.length > 0) toast.success('Content-Loaded Successfully!');

    return apiData;
  }, [date]);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['leave', date],
    queryFn: fetchData,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setLeaveData(data || []));
  }, [data, dispatch]);
  const leaveData = useSelector((state) => state?.leaveReducer?.leaves);

  const createLeave = async (newEmployee) => {
    try {
      console.log(newEmployee);
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/leave/${newEmployee.employeeId}`,
        newEmployee,
      );
      refetch();
      navigate('/leave');
    } catch (err) {
      console.log(err);
    }
  };
  return {
    leaveData,
    isLoading,
    error,
    createLeave,
  };
}

useLeaveData.propTypes = {
  date: PropTypes.object,
};
