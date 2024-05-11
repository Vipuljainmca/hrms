import { Row, Col, Card, Progress, CardBody } from 'reactstrap';
import * as Icon from 'react-feather';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const EmployeeCards = () => {
  const [length, setLength] = useState(0);
  const fetchData = useCallback(async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/employee`);
    const apiData = await response?.data;
    return apiData;
  }, []);

  const getEmployeesAttendanceLength = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/attendance`);
    const apiData = await response?.data.results;
    setLength(apiData);
  };
  useEffect(() => {
    getEmployeesAttendanceLength();
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['department'],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const employee = [
    {
      id: 1,
      icon: Icon.Users,
      title: 'Employees',
      total: data?.results,
      color: 'primary',
    },
    {
      id: 4,
      icon: Icon.ShoppingBag,
      title: 'Attendance',
      total: length,
      color: 'warning',
    },
    {
      id: 2,
      icon: Icon.Edit,
      title: 'Departments',
      total: data?.totalUniqueDepartments,
      color: 'cyan',
    },
    {
      id: 3,
      icon: Icon.FileText,
      title: "Today's Events",
      total: '0',
      color: 'purple',
    },
  ];
  return (
    <Card>
      <Row>
        {employee.map((item) => (
          <Col lg="3" md="6" className="border-end" key={item.id}>
            <CardBody>
              <div className="d-flex align-items-center">
                <div>
                  <item.icon className="text-dark" />
                  <p className="mb-3 mt-2 font-weight-bold fs-6 text-muted">{item.title}</p>
                </div>

                <div className="ms-auto">
                  <h2 className={`text-${item.color}`}>{item.total}</h2>
                </div>
              </div>

              <Progress value={item.total} color={item.color} />
            </CardBody>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default EmployeeCards;
