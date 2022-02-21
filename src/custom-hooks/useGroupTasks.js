import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTasks } from '../redux/tasks/tasksSelectors';

const useGroupTasks = () => {
  const [tasksData, setTasksData] = useState();
  const tasks = useSelector(getTasks);

  console.log(tasks);

  useEffect(() => {
    const groupedByIntersections = tasks.reduce((acc, el, index) => {
      if (index !== 0) {
        let lastArray = acc[acc.length - 1];
        const lastArrayStart = lastArray[lastArray.length - 1].start;
        const lastArrayDuration = lastArray[lastArray.length - 1].duration;

        console.log(lastArray);

        if (
          el.start < lastArrayStart + lastArrayDuration ||
          el.start === lastArrayStart
        ) {
          lastArray.push(el);
          return acc;
        }
      }

      return [...acc, [el]];
    }, []);

    setTasksData(groupedByIntersections);
  }, [tasks]);

  return { tasksData };
};

export default useGroupTasks;
