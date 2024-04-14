// Задача на знание объектов, методов массива/
// Дан массив объектов сотрудников, каждый из которых имеет поля **name** (имя), **age** (возраст) и **profession** (профессия). Также дан массив профессий, где каждая профессия представлена объектом с полями **title** (название профессии) и **skills** (массив навыков). Ваша задача:

// 1. Найти среди сотрудников человека с профессией "Разработчик".
// 2. Найти среди сотрудников всех, кто старше найденного разработчика по полю **age**.
// 3. Определить профессию самого старшего среди найденных сотрудников.
// 4. Найти в массиве профессий объект с этой профессией и вывести все его **skills**.


const employees = [
  { name: "Иван", age: 34, profession: "Разработчик" },
  { name: "Ольга", age: 40, profession: "Тестировщик" },
  { name: "Алексей", age: 45, profession: "Менеджер" }
];

const professions = [
  { title: "Разработчик", skills: ["JavaScript", "React", "Node.js"] },
  { title: "Тестировщик", skills: ["Selenium", "Postman"] },
  { title: "Менеджер", skills: ["Управление", "Agile", "Scrum"] }
];

1. function findSkillsOfOldestDeveloper(employees, professions) {
  let developer = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].profession === 'Разработчик') {
      developer = employees[i];
    } 
  } return developer;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

2. function findSkillsOfOldestDeveloper(employees, professions) {
  let developer = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      developer = employees[i];
      console.log(developer);
    }
  }  
} 
findSkillsOfOldestDeveloper(employees, professions);

3. function findSkillsOfOldestDeveloper(employees, professions) {
  let ageMax = employees[0].age;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      ageMax = employees[i];
    }
  } return ageMax;
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));

4. function findSkillsOfOldestDeveloper(employees, professions) {
  for (let i = 0; i < employees.length; i++) {
    if (professions[i].title === 'Менеджер') {
      return professions[i].skills;
    }
  }
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));
