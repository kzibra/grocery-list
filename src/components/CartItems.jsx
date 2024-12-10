import React from "react";
import { categories } from "./Categories";

const CartItems = ({ cart, weights, units, addItem, removeItem, handleWeightChange, handleUnitChange, expandedCategories, toggleCategory, searchTerm }) => {
  return (
    <div>
      {categories.map((category, index) => {
        const filteredItems = category.items.filter(item => item.name.toLowerCase().includes(searchTerm));
        const shouldExpand = expandedCategories[category.name] || searchTerm.length > 0;
        return (
          <div key={index} className="my-4">
            <h2
              onClick={() => toggleCategory(category.name)}
              className={`cursor-pointer text-xl font-semibold my-2 ${shouldExpand ? 'text-blue-600' : 'text-green-600'}`}
            >
              {category.name}
            </h2>
            {shouldExpand && (
              <div className="grid grid-cols-2 gap-4">
                {filteredItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-100 p-2 rounded border">
                    <span className={`font-medium ${cart[item.name] ? 'text-gray-800' : 'text-gray-600'}`}>{item.name}</span>
                    <span className="text-gray-600">{item.price} тенге</span>
                    <div className="flex items-center space-x-2">
                      {cart[item.name] ? (
                        <>
                          <button onClick={() => addItem(item)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">+</button>
                          <span className="text-gray-600">{cart[item.name]}</span>
                          <button onClick={() => removeItem(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">-</button>
                        </>
                      ) : (
                        <button onClick={() => addItem(item)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Добавить</button>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={weights[item.name] || ''}
                        onChange={(e) => handleWeightChange(item.name, e.target.value)}
                        className="w-20 p-2 border rounded"
                        placeholder="кол-во"
                      />
                      <select
                        value={units[item.name] || 'шт.'}
                        onChange={(e) => handleUnitChange(item.name, e.target.value)}
                        className="p-2 border rounded"
                      >
                        <option value="г">г</option>
                        <option value="шт.">шт.</option>
                        <option value="мл">мл</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
