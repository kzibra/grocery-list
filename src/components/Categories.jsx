import React from 'react';

export const categories = [
  {
    name: "Молочные продукты",
    items: [
      { name: "Молоко", price: 770 },
      { name: "Сливочное масло", price: 3100 },
      { name: "Сметана", price: 1000 },
      { name: "Творог", price: 910 },
      { name: "Ряженка", price: 900 },
      { name: "Сливки", price: 1270 },
      { name: "Моццарелла", price: 1500 },
      { name: "Моццарелла для пиццы", price: 5000 },
      { name: "Кефир", price: 600 },
      { name: "Сыр", price: 3000 },
      { name: "Айран", price: 500 },
      { name: "Буррата", price: 1400 },
      { name: "Сулугуни", price: 2000 }
    ]
  },
  {
    name: "Масла и жиры",
    items: [
      { name: "Подсолнечное масло", price: 800 },
      { name: "Оливковое масло", price: 8000 },
      { name: "Масло гхи", price: 4000 }
    ]
  },
  {
    name: "Чай, кофе и какао",
    items: [
      { name: "Чай черный", price: 1400 },
      { name: "Чай зеленый", price: 1500 },
      { name: "Кофе", price: 5000 },
      { name: "Какао", price: 2000 }
    ]
  },
  {
    name: "Выпечка и ингредиенты",
    items: [
      { name: "Мука", price: 800 },
      { name: "Разрыхлитель", price: 100 },
      { name: "Дрожжи", price: 125 },
      { name: "Соль", price: 1500 },
      { name: "Ванилин", price: 100 },
      { name: "Сода", price: 235 },
      { name: "Красный перец", price: 460 },
      { name: "Черный перец", price: 300 },
      { name: "Куркума", price: 120 },
      { name: "Панировочные сухари", price: 570 },
      { name: "Чеснок сушеный", price: 100 }
    ]
  },
  {
    name: "Зерновые и крупы",
    items: [
      { name: "Овсянка", price: 2000 },
      { name: "Гречка", price: 1200 },
      { name: "Рис", price: 2000 },
      { name: "Манная каша", price: 600 },
      { name: "Киноа", price: 3400 },
      { name: "Макароны", price: 900 },
      { name: "Спагетти", price: 700 },
      { name: "Лапша Buldak", price: 1000 },
      { name: "Яичная лапша", price: 500 },
      { name: "Гранола", price: 5600 }
    ]
  },
  {
    name: "Сахар и сладости",
    items: [
      { name: "Сахар", price: 2300 },
      { name: "Шоколад", price: 800 },
      { name: "Варенье", price: 2300 },
      { name: "Мед", price: 2500 }
    ]
  },
  {
    name: "Консервированные продукты",
    items: [
      { name: "Кукуруза консервированная", price: 880 },
      { name: "Горошек консервированный", price: 1000 },
      { name: "Крабовые палочки", price: 2500 },
      { name: "Фасоль консервированная", price: 600 },
      { name: "Огурцы маринованные", price: 1400 }
    ]
  },
  {
    name: "Мясо и птица",
    items: [
      { name: "Голень цыпленка", price: 2300 },
      { name: "Филе цыпленка", price: 2700 },
      { name: "Колбаса", price: 2300 },
      { name: "Говяжий фарш", price: 4000 },
      { name: "Говяжий стейк", price: 6000 }
    ]
  },
  {
    name: "Рыба и морепродукты",
    items: [
      { name: "Стейк семги", price: 14000 },
      { name: "Креветки", price: 7600 }
    ]
  },
  {
    name: "Напитки",
    items: [
      { name: "Кока Кола", price: 400 },
      { name: "Сан-Пеллегрино", price: 1000 },
      { name: "Вода", price: 230 }
    ]
  },
  {
    name: "Яйца",
    items: [
      { name: "Яйца", price: 2300 }
    ]
  },
  {
    name: "Замороженные продукты",
    items: [
      { name: "Замороженные ягоды", price: 1500 },
      { name: "Шпинат замороженный", price: 1800 },
      { name: "Вареники замороженные", price: 1400 },
      { name: "Пельмени замороженные", price: 2500 }
    ]
  },
  {
    name: "Орехи и семена",
    items: [
      { name: "Семена чиа", price: 640 },
      { name: "Семена льна", price: 880 },
      { name: "Тыквенные семечки", price: 1300 },
      { name: "Мак пищевой", price: 1200 },
      { name: "Кунжут", price: 100 },
      { name: "Миндаль", price: 1500 },
      { name: "Грецкие орехи", price: 1300 },
      { name: "Кедровые орехи", price: 1300 }
    ]
  },
  {
    name: "Соусы и приправы",
    items: [
      { name: "Кетчуп", price: 545 },
      { name: "Соус для мяса", price: 2100 },
      { name: "Соевый соус", price: 2600 },
      { name: "Терияки соус", price: 1300 },
      { name: "Коктейльный соус", price: 1750 },
      { name: "Рисовый уксус", price: 1300 },
      { name: "Бальзамический уксус", price: 1500 },
      { name: "Майонез", price: 800 }
    ]
  },
  {
    name: "Овощи и зелень",
    items: [
      { name: "Огурцы", price: 800 },
      { name: "Помидоры", price: 1500 },
      { name: "Капуста", price: 250 },
      { name: "Цветная капуста", price: 1000 },
      { name: "Батат", price: 1500 },
      { name: "Морковь", price: 250 },
      { name: "Лук зеленый", price: 300 },
      { name: "Лук репчатый", price: 200 },
      { name: "Красный лук", price: 400 },
      { name: "Кинза", price: 150 },
      { name: "Баклажаны", price: 1000 },
      { name: "Свекла", price: 450 },
      { name: "Чеснок", price: 250 },
      { name: "Шпинат", price: 400 },
      { name: "Кабачок", price: 600 },
      { name: "Руккола", price: 200 },
      { name: "Тыква", price: 450 },
      { name: "Розмарин", price: 800 },
      { name: "Базилик", price: 1300 },
      { name: "Картошка", price: 250 },
      { name: "Редиска", price: 600 },
      { name: "Мята", price: 500 },
      { name: "Имбирь", price: 300 },
      { name: "Петрушка", price: 100 },
      { name: "Листья салата", price: 1300 },
      { name: "Авокадо", price: 1000 },
      { name: "Брокколи", price: 2600 },
      { name: "Грибы шампиньоны", price: 400 }
    ]
  },
  {
    name: "Фрукты и ягоды",
    items: [
      { name: "Гранат", price: 1500 },
      { name: "Мандарины", price: 1500 },
      { name: "Апельсины", price: 1200 },
      { name: "Банан", price: 1200 },
      { name: "Лимон", price: 250 },
      { name: "Яблоки", price: 1000 },
      { name: "Виноград", price: 1600 },
      { name: "Клубника", price: 1600 },
      { name: "Груша", price: 1500 },
      { name: "Персик", price: 1600 },
      { name: "Слива", price: 1500 },
      { name: "Нектарины", price: 1800 },
      { name: "Арбуз", price: 1000 },
      { name: "Абрикос", price: 2000 },
      { name: "Черешня", price: 2000 },
      { name: "Вишня", price: 1800 },
      { name: "Киви", price: 2000 }
    ]
  },
  {
    name: "Хлеб и выпечка",
    items: [
      { name: "Лаваш", price: 400 },
      { name: "Хлеб", price: 400 },
      { name: "Хлебцы", price: 300 }
    ]
  },
  {
    name: "Домашние нужды",
    items: [
      { name: "Бумажные полотенца", price: 1500 },
      { name: "Туалетная бумага", price: 4200 },
      { name: "Прокладки", price: 3300 },
      { name: "Ежедневки", price: 1300 },
      { name: "Тампоны", price: 1400 },
      { name: "Зубная паста", price: 1300 },
      { name: "Зубные щетки", price: 1400 },
      { name: "Мыло", price: 1600 },
      { name: "Салфетки", price: 1200 },
      { name: "Губки для посуды", price: 700 },
      { name: "Пищевая пленка", price: 600 },
      { name: "Пергамент для запекания", price: 700 },
      { name: "Отбеливатель-пятновыводитель", price: 2400 },
      { name: "Перчатки нитриловые", price: 700 },
      { name: "Гель для душа", price: 2000 },
      { name: "Шампунь", price: 3200 },
      { name: "Таблетки для посудомойки", price: 5500 },
      { name: "Порошок для стирки", price: 6000 },
      { name: "Гель для пола", price: 1700 },
      { name: "Фольга", price: 900 },
      { name: "Пакеты для мусора", price: 1300 },
      { name: "Гель для мытья посуды", price: 1800 }
    ]
  }
];

const Categories = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="my-4 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold text-green-600">{category.name}</h2>
          <ul className="list-disc list-inside">
            {category.items.map((item, idx) => (
              <li key={idx} className="my-1">{item.name} - {item.price} тенге</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categories;
