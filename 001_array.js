Задача на знание объектов, методов массива.
Дан массив объектов сотрудников, каждый из которых имеет поля **name** (имя), **age** (возраст) и **profession** (профессия). Также дан массив профессий, где каждая профессия представлена объектом с полями **title** (название профессии) и **skills** (массив навыков). Ваша задача:

1. Найти среди сотрудников человека с профессией "Разработчик".
2. Найти среди сотрудников всех, кто старше найденного разработчика по полю **age**.
3. Определить профессию самого старшего среди найденных сотрудников.
4. Найти в массиве профессий объект с этой профессией и вывести все его **skills**.

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

1. Через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  let developer = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].profession === 'Разработчик') {
      developer = employees[i];
    } 
  } return developer;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

1. Через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const developer = employees.find((emploee) => emploee.profession === 'Разработчик');
  return developer;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

2. Через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  const olderDeveloper = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      olderDeveloper.push(employees[i]);
    }
  } return olderDeveloper;  
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

3. Через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  let ageMaxProfession = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      ageMaxProfession = employees[i].profession;
    }
  } return ageMaxProfession;
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));

4. Через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  for (let i = 0; i < employees.length; i++) {
    if (professions[i].title === 'Менеджер') {
      return professions[i].skills;
    }
  }
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));

4. Через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const findSkills = professions.find((profession) => profession.title === 'Менеджер');
  return findSkills;
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));
