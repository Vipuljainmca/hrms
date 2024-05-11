import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';
import moment from 'moment';
import * as Icon from 'react-feather';
import ComponentCard from '../../../ComponentCard';

const optionsdoughnut = {
  labels: ['In Time', 'Late', 'Absent', 'Vacation'],
  chart: {
    id: 'donut-chart',
    fontFamily: "Rubik', sans-serif",
  },
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65px',
      },
    },
  },
  legend: {
    show: true,
    position: 'bottom',
    width: '50px',
    fontFamily: "'Montserrat', sans-serif",
    labels: {
      colors: '#8898aa',
    },
  },
  colors: ['rgb(135, 179, 244)', '#ff7673', '#FFC700', 'rgb(176, 151, 252)'],
  tooltip: {
    fillSeriesColor: false,
    theme: 'dark',
  },
};
// const seriesdoughnut = [450, 15, 27, 35];

export default function EmployeeAttendanceChart({ statusCount }) {
  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm:ss A'));
  const [loginTime, setLoginTime] = useState('');
  const [logoutTime, setLogoutTime] = useState('');
  const [durationTime, setDurationTime] = useState('');
  const [isLoginDisabled, setLoginDisabled] = useState(false);
  const [isLogoutDisabled, setLogoutDisabled] = useState(true);

  const handleLogin = () => {
    const loginTimeString = moment().format('hh:mm A');
    setLoginTime(loginTimeString);
    setLoginDisabled(true);
    setLogoutDisabled(false);
  };

  const handleLogout = () => {
    const logoutTimeString = moment().format('hh:mm A');
    const loginMoment = moment(loginTime, 'hh:mm A');
    const logoutMoment = moment(logoutTimeString, 'hh:mm A');

    // Calculate duration
    const duration = moment.duration(logoutMoment.diff(loginMoment));
    const durationTimeString = `${Math.floor(
      duration.asHours(),
    )} hours ${duration.minutes()} minutes`;

    setLogoutTime(logoutTimeString);
    setDurationTime(durationTimeString);
    setLoginDisabled(true);
    setLogoutDisabled(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Run only once on component mount

  return (
    <Row>
      <Col md="6">
        <ComponentCard title="Attendance Chart">
          <Chart options={optionsdoughnut} series={statusCount} type="donut" height="300" />
        </ComponentCard>
      </Col>
      <Col md="6">
        <ComponentCard title={`Date : ${moment().format('Do MMM YYYY')}`}>
          <Card className="text-center">
            <CardBody>
              <div>
                <Icon.Clock size={50} color="gray" />
                <h1 className="text-black ">{currentTime}</h1>
              </div>
              <div>Login Time: {loginTime}</div>
              <div>Logout Time: {logoutTime}</div>
              <div>Duration Time: {durationTime}</div>
              <div className="d-flex justify-content-between">
                <Button color="primary" onClick={handleLogin} disabled={isLoginDisabled}>
                  LOGIN
                </Button>
                <Button color="primary" onClick={handleLogout} disabled={isLogoutDisabled}>
                  LOGOUT
                </Button>
              </div>
            </CardBody>
          </Card>
        </ComponentCard>
      </Col>
    </Row>
  );
}

EmployeeAttendanceChart.propTypes = {
  statusCount: PropTypes.array.isRequired,
};
