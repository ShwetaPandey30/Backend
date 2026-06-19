const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main()
.then(()=> console.log("connection successful"))
.catch((err) =>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

}

// ----------Defining userSchema-----------------------

const orderSchema = new Schema({
   item: String,
   price: Number,

});
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
})
// customerSchema.pre("findOneAndDelete",async () =>{
//     console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete",async (customer) =>{
    if(customer.orders.length){
        let res = await Order.deleteMany({ _id: { $in: customer.orders} });
        console.log(res);
    }
});
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};

findCustomer();
const findCustomers = async ()=>{
//     let cust1 = new Customer({
//         name: "Rahul Kumar",
//     });
//     let order1 = await Order.findOne({item: "chips"});
//     let order2 = await Order.findOne({item:"Chocolate"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
//     let result = await cust1.save();
//     console.log(result);
       let result = await Customer.find({});
       console.log(result);
};
findCustomer();
// const addOrders = async ()=>{
//     let res = await Order.insertMany([
//         {item:"Samosa",price: 12},
//         {item:"chips",price: 10},
//         {item:"Chocolate",price: 40},
//     ]);
//     console.log(res);
// };
//addCustomers();

const addCust = async ()=>{
    let newCust = new Customer({
        name: "karan Arjun"
    });
    let newOrder = new Order({
        item:"Burger",
        price: "250"
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("Added New customer");
};

const  delCust = async() =>{
    let data =  await Customer.findByIdAndDelete("6a3505cf2f70cd6263c48ec1")
}
// addCust();
delCust();
