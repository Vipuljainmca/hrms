import React from 'react';
import { MdCardGiftcard } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';
import './OverviewCard.css';
import IndiviualCard from './IndiviualCard';

export default function OverviewCard() {
  const newarr = [
    {
      id: 1,
      title: 'Employees',
      total: '65',
      graph_data: [
        {
          title: 'In-time',
          number: '60',
          percentage: '65',
          color: 'green',
        },
        {
          title: 'Late',
          number: '15',
          percentage: '15',
          color: 'red',
        },
        {
          title: 'Absent',
          number: '4',
          percentage: '10',
          color: 'black',
        },
        {
          title: 'Out on Vacation',
          number: '1',
          percentage: '5',
          color: 'purple',
        },
      ],
    },
    {
      id: 2,
      title: 'Departments',
      total: '12',
      graph_data: [
        {
          title: 'Human Resources',
          number: '2',
          percentage: '15',
          color: '#008DDA',
        },
        {
          title: 'Entrepreneurship',
          number: '8',
          percentage: '25',
          color: '#008DDA',
        },
        {
          title: 'Opration',
          number: '7',
          percentage: '20',
          color: '#008DDA',
        },
        {
          title: 'Engineering',
          number: '1',
          percentage: '5',
          color: '#008DDA',
        },
      ],
    },
  ];

  const userData = [
    {
      id: 1,
      img: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw',
      name: 'Gilbert Barrett',
      email: 'paolo.zieme@gmail.com',
      icon: <TbMailFilled className="mail-icon" />,
    },
    {
      id: 2,
      img: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw',
      name: 'Gilbert Barrett',
      email: 'paolo.zieme@gmail.com',
      icon: <TbMailFilled className="mail-icon" />,
    },
  ];
  return (
    <div className="overview-card-div">
      {newarr.map((cardData) => (
        <IndiviualCard key={cardData.id} cardData={cardData} />
      ))}
      {/* Birthday Card */}
      <div className="card birthday-card rounded-3 custom-border">
        <div className="today-heading">Today</div>
        <div className=" custom-birthdaycard birthday-wish-box">
          <div className="custom-birthdaycard birthday-wish-innerbox">
            <div>
              <MdCardGiftcard className="gift-icon" />
            </div>
            <div>
              <p className="birth-wish-p">
                Take a minute and congratulate
                <br /> them on their special day!
              </p>
            </div>
          </div>
        </div>
        {userData.map((user) => (
          <div key={user.id} className="custom-birthdaycard birthday-wish-innerbox">
            <div>
              <img src={user.img} className=" float-start profile-picture-small" alt="..." />
            </div>
            <div>
              <p className="birth-pern-name">
                <b>{user.name}</b>
              </p>
              <p className="birth-pern-mail">{user.email}</p>
            </div>
            <div>{user.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
