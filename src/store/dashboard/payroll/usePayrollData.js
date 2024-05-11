import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { setPayrollData, addPayroll, updatePayroll, deletePayroll } from './payrollSlice';

export default function usePayrollData() {
  const fetchData = useCallback(async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/payroll`);
    const apiData = await response.data;
    if (apiData) toast.success('Content-Loaded Successfully!');

    return apiData;
  }, []);
  const { data, isLoading, error } = useQuery({
    queryKey: ['payroll'],
    queryFn: fetchData,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setPayrollData(data || []));
  }, [data, dispatch]);

  const payrollData = useSelector((state) => state?.payrollReducer?.payroll);

  return {
    payrollData,
    isLoading,
    error,
    addPayroll: (employee) => dispatch(addPayroll(employee)),
    updatePayroll: (employeeId) => dispatch(updatePayroll(employeeId)),
    deletePayroll: (employeeId) => dispatch(deletePayroll(employeeId)),
  };
}
