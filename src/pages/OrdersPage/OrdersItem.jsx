import React, { useEffect } from "react";
import "./Orders.css";
import { useOrder } from "../../context/OrderContextProvider";

const OrdersItem = () => {
  const { getOrders, allorders } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {allorders.length > 0 ? (
        <>
          <h1 className="orders">Ваши заказы</h1>
          {allorders.map((order) => (
            <div key={order.id} className="courses-container">
              <div className="course">
                <div className="course-preview">
                  <h2>Заказ номер {order.id}</h2>
                  <h3>Дата : {order.date}</h3>
                </div>
                <div className="course-info">
                  <div className="progress-container">
                    <div className="progress">
                      <br />
                      <h3>
                        Cтатус :{" "}
                        {order.adopted === "false" ? (
                          <span>не принят (ожидание)</span>
                        ) : (
                          <span>Принят</span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h6>Адрес куда доставить</h6>
                    <h2>{order.address_sender}</h2>
                    <h6>Адрес откуда доставка</h6>
                    <h2>{order.address_receiver}</h2>
                    <h6>Описание товара</h6>
                    <h2>{order.description}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1 style={{ margin: "10rem 0" }}>В вашей корзине пока нет заказов</h1>
      )}
    </>
  );
};

export default OrdersItem;
