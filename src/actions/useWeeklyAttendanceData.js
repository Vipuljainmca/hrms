import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { weekfDate } from '../utils/format-time';
import { fullDate } from '../utils/formattedDate';

export default function useWeeklyAttendanceData() {
  const { weeklyDate } = fullDate();

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/attendance/allByDate?startYear=${weeklyDate.startYear}&startMonth=${weeklyDate.startMonth}&startDay=${weeklyDate.startDay}&endYear=${weeklyDate.endYear}&endMonth=${weeklyDate.endMonth}&endDay=${weeklyDate.endDay}`,
    );
    const apiData = await response.data;

    return apiData;
  };

  const { data } = useQuery({
    queryKey: ['weeklyAttendance', weeklyDate],
    queryFn: fetchData,
  });

  const formattedData = data?.attendance?.map((employee) => ({
    status: employee?.attendance[0]?.status,
    date: weekfDate(employee?.attendance[0]?.date),
  }));

  const weeklyStatus = {
    Mon: { present: 0, absent: 0, halfday: 0 },
    Tue: { present: 0, absent: 0, halfday: 0 },
    Wed: { present: 0, absent: 0, halfday: 0 },
    Thur: { present: 0, absent: 0, halfday: 0 },
    Fri: { present: 0, absent: 0, halfday: 0 },
    Sat: { present: 0, absent: 0, halfday: 0 },
  };

  formattedData?.forEach((recordData) => {
    const { date, status } = recordData;
    if (weeklyStatus[date] && weeklyStatus[date][status] !== undefined) {
      weeklyStatus[date][status]++;
    }
  });

  const totalCounts = data?.totalCounts ?? {};
  return {
    weeklyStatusData: weeklyStatus,
    totalCounts,
  };
}
