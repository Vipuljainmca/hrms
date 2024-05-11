import * as Icon from 'react-feather';

const SidebarData = [
  {
    title: 'Dashboard',
    href: '/',
    id: 1,
    icon: <Icon.Home />,
  },
  {
    title: 'Employee',
    href: '/employee',
    icon: <Icon.Users />,
    id: 2,
    collapisble: false,
  },
  {
    title: 'Attendance',
    href: '/attendance',
    icon: <Icon.FileText />,
    id: 3,
    collapisble: false,
  },
  {
    title: 'Department',
    href: '/department',
    icon: <Icon.PieChart />,
    id: 4,
    collapisble: false,
  },
  {
    title: 'Leave',
    href: '/leave',
    icon: <Icon.Book />,
    id: 5,
    collapisble: false,
  },
];

export default SidebarData;
