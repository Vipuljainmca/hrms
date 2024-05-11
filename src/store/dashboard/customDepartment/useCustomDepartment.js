import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setCustomDepartment } from './customDeparmentSlice';

const useCustomDepartment = () => {
  const dispatch = useDispatch();
  const fetchCustomDepartmentData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customDepartment`);
    const data = await response.data;
    return data;
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['customDepartment'],
    queryFn: fetchCustomDepartmentData,
  });

  useEffect(() => {
    if (data) dispatch(setCustomDepartment(data ?? []));
  }, [data, dispatch]);

  const customDepartment = useSelector((state) => state?.customDepartmentReducer?.customDepartment);

  const navigation = useNavigate();
  const createCustomDepartment = async (newDepartment) => {
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/customDepartment`, newDepartment);
      toast.success('Department created successfully.');
      refetch();
      navigation('/department');
    } catch (err) {
      console.log('error', err);
      toast.error(err.message);
    }
  };

  const updateCustomDepartment = async (newDepartment) => {
    try {
      const departmentName = customDepartment?.customDepartment?.filter(
        (filterDepartment) => filterDepartment?.departmentName === newDepartment?.departmentName,
      )[0];
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/customDepartment/${departmentName?._id}`,
        newDepartment,
      );
      toast.success('Department created successfully.');
      refetch();
      navigation('/department');
    } catch (err) {
      console.log('error', err);
      toast.error(err.message);
    }
  };
  return {
    customDepartment,
    isLoading,
    error,
    createCustomDepartment,
    updateCustomDepartment,
    refetch,
  };
};

export default useCustomDepartment;
