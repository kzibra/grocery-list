import React from "react";

const PurchaseHistory = ({ purchaseHistory, setPurchaseHistory }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 my-2">История покупок</h2>
      {purchaseHistory.length > 0 ? (
        <>
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="my-4 p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-medium text-gray-800">Покупка от {purchase.date}</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(purchase.cart).map(([item, quantity], idx) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-100 p-2 rounded border">
                    <span className="font-medium text-gray-800">{item}</span>
                    <span className="text-gray-600">x{quantity} {purchase.weights[item] ? `(${purchase.weights[item]} ${purchase.units[item] || 'шт.'})` : ''}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => {
                const updatedHistory = purchaseHistory.filter((_, i) => i !== index);
                setPurchaseHistory(updatedHistory);
                localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));
              }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2">
                Удалить эту покупку
              </button>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button onClick={() => {setPurchaseHistory([]); localStorage.removeItem('purchaseHistory');}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Очистить всю историю покупок
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">История покупок пока пуста.</p>
      )}
    </div>
  );
};

export default PurchaseHistory;

