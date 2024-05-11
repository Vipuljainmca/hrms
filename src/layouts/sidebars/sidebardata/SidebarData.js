import * as Icon from 'react-feather';

const SidebarData = [
  {
    title: 'Dashboard',
    href: '/',
    id: 1,
    icon: <Icon.Home />,
  },
  {
    title: 'Employees',
    href: '/employee',
    icon: <Icon.Users />,
    id: 1.1,
    collapisble: false,
  },
  {
    title: 'Attendance',
    href: '/attendance',
    icon: <Icon.FileText />,
    id: 1.3,
    collapisble: false,
  },
  {
    title: 'Department',
    href: '/department',
    icon: <Icon.PieChart />,
    id: 1.2,
    collapisble: false,
  },
  {
    title: 'Leave',
    href: '/leave',
    icon: <Icon.Book />,
    id: 1.4,
    collapisble: false,
  },
];

export default SidebarData;
