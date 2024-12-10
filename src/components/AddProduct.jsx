import React, { useState } from 'react';
import { categories } from './Categories';

const AddProduct = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({ name: '', price: '', category: '' });

  const handleAddItem = () => {
    const categoryIndex = categories.findIndex(cat => cat.name === newItem.category);
    if (categoryIndex !== -1) {
      const category = categories[categoryIndex];
      onAddItem({
        name: newItem.name,
        price: parseInt(newItem.price, 10),
        category: category.name,
      });
      setNewItem({ name: '', price: '', category: '' });
    }
  };

  return (
    <div className="my-4 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-semibold text-green-600">Добавить новый продукт</h2>
      <input
        type="text"
        placeholder="Название продукта"
        value={newItem.name}
        onChange={e => setNewItem({ ...newItem, name: e.target.value })}
        className="mr-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Цена"
        value={newItem.price}
        onChange={e => setNewItem({ ...newItem, price: e.target.value })}
        className="mr-2 p-2 border rounded"
      />
      <select
        value={newItem.category}
        onChange={e => setNewItem({ ...newItem, category: e.target.value })}
        className="mr-2 p-2 border rounded"
      >
        <option value="">Выберите категорию</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
      <button onClick={handleAddItem} className="p-2 bg-blue-500 text-white rounded">Добавить</button>
    </div>
  );
};

export default AddProduct;
