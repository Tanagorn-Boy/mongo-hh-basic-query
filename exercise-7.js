//Delete ข้อมูล Document ของ Customer ที่มีชื่อว่า Jack ออกทั้งหมด
db.pizzaOrders.deleteMany({
  customer_name: "Jack", // เงื่อนไขการค้นหาเอกสารที่ต้องการลบ
});
