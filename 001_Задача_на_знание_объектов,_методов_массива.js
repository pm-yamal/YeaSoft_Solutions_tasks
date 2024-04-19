Задача на знание объектов, методов массива.
Дан массив объектов сотрудников, каждый из которых имеет поля **name** (имя), **age** (возраст) и **profession** (профессия). Также дан массив профессий, где каждая профессия представлена объектом с полями **title** (название профессии) и **skills** (массив навыков). 
Ваша задача:
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

1. Решение через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  let developer = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].profession === 'Разработчик') {
      developer = employees[i];
    } 
  } return developer;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

1. Решение через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const developer = employees.find((emploee) => emploee.profession === 'Разработчик');
  return developer;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

2. Решение через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  const olderDeveloper = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      olderDeveloper.push(employees[i]);
    }
  } return olderDeveloper;  
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

2. Решение через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const older = employees.filter(i => i.age > employees[0].age);
  return older; 
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

3. Решение через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  let ageMaxProfession = null;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > employees[0].age) {
      ageMaxProfession = employees[i].profession;
    }
  } return ageMaxProfession;
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));

3. Решение через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const oldest = employees.find(i => i.age > employees[1].age);
  return oldest.profession;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));

4. Решение через цикл
function findSkillsOfOldestDeveloper(employees, professions) {
  for (let i = 0; i < employees.length; i++) {
    if (professions[i].title === 'Менеджер') {
      return professions[i].skills;
    }
  }
} 
console.log(findSkillsOfOldestDeveloper(employees, professions));

4. Решение через метод
function findSkillsOfOldestDeveloper(employees, professions) {
  const object = professions.find(i => i.title === 'Менеджер');
  return object.skills;
}
console.log(findSkillsOfOldestDeveloper(employees, professions));
