import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { setEmployeeData } from './employeeSlice';

export default function useEmployeeData() {
  const naviagte = useNavigate();
  const fetchData = useCallback(async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee`);
    const apiData = await response.data;
    if (apiData?.length !== response?.data?.length) toast.success('Employee Updated Successfully!');

    return apiData;
  }, []);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['department'],
    queryFn: fetchData,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setEmployeeData(data || []));
  }, [data, dispatch]);
  const employeeData = useSelector((state) => state?.employeeReducer?.employeeData);

  const createEmployee = async (newEmployee) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/employee`, newEmployee);
      toast.success('Employee updated successfully');

      refetch();
      naviagte('/employee');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
  };

  const updateEmployee = async (updatedEmployee) => {
    console.log(updateEmployee);
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/employee/${updatedEmployee?.id}`,
        updatedEmployee,
      );
      toast.success('Employee updated successfully');
      refetch();
      naviagte('/employee');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/employee/${employeeId}`);
      toast.success('Employee deleted successfully');
      refetch();
      naviagte('/employee');
    } catch (err) {
      console.log(err.message);
      toast.error(err.response.data.error);
    }
  };

  return {
    createEmployee,
    employeeData,
    deleteEmployee,
    updateEmployee,
    isLoading,
    error,
  };
}
