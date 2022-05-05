const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const bodyParser = require("koa-bodyparser");

const port = 5000;

//use as middleware
app.use(bodyParser());

//Item Array
var data = [
  { id: 1, name: "Rice", price: 200, qty: 50, promo: "promotion unavailabe" },
  { id: 2, name: "Dal", price: 400, qty: 30, promo: "promotion unavailabe" },
  {
    id: 3,
    name: "Noodles",
    price: 280,
    qty: 100,
    promo: "promotion unavailabe",
  },
  {
    id: 5,
    name: "Milk Powder",
    price: 600,
    qty: 80,
    promo: "promotion unavailabe",
  },
];

//User Details Array
var userDetails = [
  {
    id: 1,
    name: "admin1",
    email: "admin1@gmail.com",
    phone: "0718273745",
    type: "Trader",
  },
  {
    id: 2,
    name: "Kamal",
    email: "Kamal@gmail.com",
    phone: "0712345676",
    type: "customer",
  },
  {
    id: 3,
    name: "Sunil",
    email: "Sunil@gmail.com",
    phone: "0718313414",
    type: "customer",
  },
  {
    id: 4,
    name: "admin1",
    email: "admin1@gmail.com",
    phone: "0718273745",
    type: "Trader",
  },
  {
    id: 5,
    name: "admin2",
    email: "admin2@gmail.com",
    phone: "07134143576",
    type: "Trader",
  },
];

//customer wish list and cart array
var custmerVishList = [];
var customerCart = [];

//get Item details
const getItem = async (ctx) => {
  ctx.body = data;
};

//add item to array
const addItem = async (ctx) => {
  var uin = ctx.request.body;
  data.push(uin);
  ctx.body = { data: data };
};

// update data array
const updateItem = async (ctx) => {
  let uin = ctx.request.body;
  const updateArray = data.filter((item) => {
    if (item.id != uin.id) {
      return item;
    }
  });
  data = [...updateArray, uin];
  ctx.body = data;
};

// delete data array
const deleteItem = async (ctx) => {
  let uin = ctx.request.body;
  const deleteArray = data.filter((item) => {
    if (item.id !== uin.id) {
      return item;
    }
  });
  data = deleteArray;
  ctx.body = data;
};

//create user
const createProfile = async (ctx) => {
  const user = ctx.request.body;
  const adduser = { ...user, id: new Date().getTime() };
  userDetails.push(adduser);

  ctx.body = userDetails;
};

//get Customer details
const userRead = async (ctx) => {
  const customerArray = userDetails.filter((user) => {
    if (user.type === "customer") {
      return user;
    }
  });

  ctx.body = customerArray;
};

router.get("/", (ctx) => (ctx.body = "Server Run"));

//ruotes
router.get("/getData", getItem);
router.post("/add", addItem);
router.put("/updateItem", updateItem);
router.delete("/delete", deleteItem);
router.post("/createUser", createProfile);
router.get("/users", userRead);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
