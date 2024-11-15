//ใช้ findOne ในการหาข้อมูล Document ของลูกค้าชื่อ Cherlyn
db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

//ใช้ find ในการหาข้อมูล Document ทั้งหมดที่จ่ายเงินด้วย Credit Card ของ mastercard
db.pizzaOrders.find({ credit_card_type: "mastercard" }).toArray();

//ใช้ find ในการหาข้อมูล Document ทั้งหมดที่สั่ง Pizza ขนาด medium โดย Limit จำนวนข้อมูลแค่ 5 Documents
db.pizzaOrders.find({ size: "medium" }).limit(5).toArray();

{
  /* 
import { MongoClient } from "mongodb";

const connectionString = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

(async () => {
  // รอแก้ try
  try {
    console.log("------- Start connecting to MongoDB -------");
    await client.connect();
    console.log("------- Connected to MongoDB Successfully -------");

    const db = client.db("practice-mongo");
    const collection = db.collection("pizzaOrders");
    // Exercise #1   *** มี 3 ข้อ ***
    // 1. ใช้ findOne ในการหาข้อมูล Document ของลูกค้าชื่อ Cherlyn
    const cherlynDocument = await collection.findOne({
      customer_name: "Cherlyn",
    });
    console.log("Document for customer Cherlyn:", cherlynDocument);
    
    // 2. ใช้ find ในการหาข้อมูล Document ทั้งหมดที่จ่ายเงินด้วย Credit Card ของ mastercard
    const creditcardDocument = await collection
      .find({
        credit_card_type: "mastercard",
      })
      .toArray();
    console.log("Document for pay credit card all:", creditcardDocument);

// 3. ใช้ find ในการหาข้อมูล Document ทั้งหมดที่สั่ง Pizza ขนาด medium โดย Limit จำนวนข้อมูลแค่ 5 Documents
    const pizzaSizeMediumDocument = await collection
      .find({
        size: "medium",
      })
      .limit(5)
      .toArray();
    console.log("order medium pay pizza ", pizzaSizeMediumDocument);
  } catch (e) {
    console.error("Error during execution:", error);
  } finally {
    await client.close();
    console.log("------- Connection to MongoDB closed -------");
  }
})();
*/
}
