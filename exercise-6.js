//Update ข้อมูล Document ทุกอันของ Customer ที่มีชื่อว่า Jack ด้วย updateMany
//โดยเพิ่ม Key และ Value Pair ดังนี้
db.pizzaOrders.updateMany(
  { customer_name: "Jack" }, // เงื่อนไขการค้นหาลูกค้าที่มีชื่อว่า Jack
  {
    $set: { isAdmin: false }, // เพิ่มฟิลด์ isAdmin พร้อมตั้งค่าเป็น false
  }
);

//Update ข้อมูล Document ทุกอันด้วย updateMany
//โดยเพิ่ม Key และ Value Pair ดังนี้
db.pizzaOrders.updateMany(
  { size: "small" }, // เฉพาะเอกสารที่มี size เป็น "small"
  { $set: { country: "Thailand" } }
);

//Update ข้อมูล Document ด้วย updateOne โดยมีรายละเอียดดังนี้
//Update ข้อมูล Document ของ Customer ที่มีชื่อว่า M

//แต่ถ้าไม่มี Document ที่มีชื่อ Customer เป็น M ในระบบ ก็ให้สร้างมาเป็น Document ใหม่แทน

db.pizzaOrders.updateOne(
  { customer_name: "M" }, // เงื่อนไขการค้นหาลูกค้าที่มีชื่อว่า M
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: new Date("2022-01-01T10:48:40Z"),
    },
  },
  { upsert: true } // ใช้ upsert เพื่อสร้างเอกสารใหม่หากไม่พบเอกสารที่ตรงกับเงื่อนไข
);
