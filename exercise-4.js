// ให้ Query ข้อมูล Document ทั้งหมดที่มีการสั่งจำนวน Pizza น้อยกว่า 5 ถาด และจ่ายเงินด้วย Credit Card ของ mastercard
db.pizzaOrders.find({
  quantity: { $lt: 5 },
  credit_card_type: "mastercard",
});

// Query ข้อมูล Document ทั้งหมดที่สั่งซื้อ Pizza ขนาดเล็ก และมีจำนวนถาดอยู่ระหว่าง 1 - 5 ถาด

db.pizzaOrders.find({
  size: "small",
  quantity: { $gte: 1, $lte: 5 },
});

// Query ข้อมูล Document ทั้งหมดที่มีการสั่ง Pizza จำนวนมากกว่า 10 ถาด และไม่ได้จ่ายเงินด้วย Credit Card
db.pizzaOrders.find({
  quantity: { $gt: 10 },
  credit_card_type: null,
});
