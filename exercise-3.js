//Sort ข้อมูลทั้งหมดด้วย Property total_price จากมากไปน้อย
db.pizzaOrders.find().sort({ total_price: -1 });

//Sort ข้อมูลทั้งหมดด้วย Property created_at จากวันที่เก่าที่สุดไปใหม่ที่สุด
db.pizzaOrders.find().sort({ created_at: 1 });