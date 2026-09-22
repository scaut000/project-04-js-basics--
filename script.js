const studentName = 'Владимир';
const courseName = 'Основы веб-разработки';

let completedTasks = 10;
const totalTasks = 10;

const remainingTasks = totalTasks - completedTasks;
const progress = Math.round(completedTasks / totalTasks * 100);

console.log(`Студент: ${studentName}`);
console.log(`Курс: ${courseName}`);
console.log(`Осталось заданий: ${remainingTasks}`);
console.log(`Прогресс: ${progress}%`);

if (completedTasks === totalTasks) {
    console.log('Работа завершена');
} else {
    console.log('Продолжай работу');
}

if (progress >= 80) {
    console.log('Финиш близко');
}

const hoursSpent = 30;
const avgHoursPerTask = hoursSpent / completedTasks;
console.log(`Среднее время на задание: ${avgHoursPerTask} ч.`);
