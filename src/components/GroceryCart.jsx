import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { categories } from "./Categories";
import AddProduct from './AddProduct';
import CartItems from './CartItems';
import PurchaseHistory from './PurchaseHistory';

function GroceryCart() {
  const [cart, setCart] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [weights, setWeights] = useState({});
  const [units, setUnits] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("purchaseHistory");
    if (savedHistory) {
      setPurchaseHistory(JSON.parse(savedHistory));
    }

    // Изначально скрываем все категории
    const initialExpandedCategories = {};
    categories.forEach(category => {
      initialExpandedCategories[category.name] = false;
    });
    setExpandedCategories(initialExpandedCategories);
  }, []);

  const addItem = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.name]: (prevCart[item.name] || 0) + 1
    }));
  };

  const removeItem = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.name] > 1) {
        newCart[item.name] -= 1;
      } else {
        delete newCart[item.name];
      }
      return newCart;
    });
  };

  const resetCart = () => {
    setCart({});
    setWeights({});
    setUnits({});
  };

  const saveToHistory = () => {
    const currentPurchase = { cart, weights, units, date: new Date().toLocaleString() };
    const updatedHistory = [currentPurchase, ...purchaseHistory];
    setPurchaseHistory(updatedHistory);
    localStorage.setItem("purchaseHistory", JSON.stringify(updatedHistory));
    resetCart();
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prevExpandedCategories) => ({
      ...prevExpandedCategories,
      [categoryName]: !prevExpandedCategories[categoryName]
    }));
  };

  const handleWeightChange = (item, value) => {
    setWeights((prevWeights) => ({
      ...prevWeights,
      [item]: value,
    }));
  };

  const handleUnitChange = (item, unit) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [item]: unit,
    }));
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const newExpandedCategories = {};
    categories.forEach(category => {
      newExpandedCategories[category.name] = category.items.some(item => item.name.toLowerCase().includes(term));
    });
    setExpandedCategories(newExpandedCategories);
  };

  const clearSearch = () => {
    setSearchTerm("");
    // Скрываем все категории при очистке поиска
    const initialExpandedCategories = {};
    categories.forEach(category => {
      initialExpandedCategories[category.name] = false;
    });
    setExpandedCategories(initialExpandedCategories);
  };

  const calculateTotalPrice = () => {
    return Object.keys(cart).reduce((total, itemName) => {
      const category = categories.find(category => category.items.some(item => item.name === itemName));
      const item = category.items.find(item => item.name === itemName);
      return total + item.price * cart[itemName];
    }, 0);
  };

  const copyToClipboard = () => {
    let text = "Grocery List:\n";
    categories.forEach((category) => {
      const items = Object.entries(cart)
        .filter(([item]) => category.items.some(catItem => catItem.name === item))
        .map(([item, quantity]) => {
          const unit = units[item] || 'шт.';
          const weight = weights[item] ? `(${weights[item]} ${unit})` : '';
          return `${item} ${quantity > 1 ? `x${quantity}` : ''} ${weight}`;
        })
        .join(', ');
      if (items) {
        text += `\n${category.name}:\n${items}\n`;
      }
    });
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Список скопирован в буфер обмена!');
      })
      .catch((err) => {
        console.error('Ошибка копирования: ', err);
      });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800">Grocery Cart</h1>
      <AddProduct onAddItem={addItem} />
      <div className="my-4 flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
          placeholder="Поиск товаров..."
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Очистить
          </button>
        )}
      </div>
      <CartItems
        cart={cart}
        weights={weights}
        units={units}
        addItem={addItem}
        removeItem={removeItem}
        handleWeightChange={handleWeightChange}
        handleUnitChange={handleUnitChange}
        expandedCategories={expandedCategories}
        toggleCategory={toggleCategory}
        searchTerm={searchTerm}
      />
      {Object.keys(cart).length > 0 && (
        <div className="mt-8">
                    <h2 className="text-xl font-semibold text-orange-600 my-2">Выбранные товары</h2>
          {categories.filter(category => category.items.some(item => cart[item.name])).map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-orange-500">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(cart)
                  .filter(([itemName]) => category.items.some(item => item.name === itemName))
                  .map(([itemName, quantity], idx) => {
                    const item = category.items.find(item => item.name === itemName);
                    return (
                      <div key={idx} className="flex justify-between items-center bg-yellow-100 p-2 rounded border">
                        <span className={`font-medium ${quantity ? 'text-gray-800' : 'text-gray-600'}`}>{itemName}</span>
                        <span className="text-gray-600">x{quantity} {weights[itemName] ? `(${weights[itemName]} ${units[itemName] || 'шт.'})` : ''} - {item.price * quantity} тенге</span>
                        <button onClick={() => removeItem(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">-</button>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
          <div className="flex justify-between my-4">
            <button onClick={saveToHistory} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Сохранить в историю
            </button>
            <button onClick={resetCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Очистить корзину
            </button>
          </div>
          <div className="text-xl font-bold text-gray-800">Общая стоимость: {calculateTotalPrice()} тенге</div>
        </div>
      )}
      <PurchaseHistory
        purchaseHistory={purchaseHistory}
        setPurchaseHistory={setPurchaseHistory}
      />
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button onClick={copyToClipboard} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Copy List
        </button>
        <button onClick={resetCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Reset List
        </button>
        <a href="https://wa.me/18772241042" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
          <FaWhatsapp size={40} />
        </a>
        <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaTelegramPlane size={40} />
        </a>
      </div>
    </div>
  );
}

export default GroceryCart;
