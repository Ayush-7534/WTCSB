function step(mess, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mess);
      resolve(mess);
    }, delay);
  });
}

// async function runDelivery() {
//   try {
//     await step("Placing order...", 1000);
//     console.log("Order confirmed");

//     await step("Assigning rider...", 2000);
//     console.log("Rider assigned");

//     await step("Picking up order...", 2000);
//     console.log("On the way");

//     await step("Delivering order...", 3000);
//     console.log("Delivered");

//   } catch (err) {
//     console.log("Error:", err);
//   } finally {
//     console.log("Tracking closed");
//   }
// }

// runDelivery();



step("Placing order...", 1000)
  .then(() => {
    console.log("Order confirmed");
    return step("Assigning rider...", 2000);
  })
  .then(() => {
    console.log("Rider assigned");
    return step("Picking up order...", 3000);
  })
  .then(() => {
    console.log("On the way");
    return step("Delivering order...", 4000);
  })
  .then(() => {
    console.log("Delivered");
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Tracking Closed");
  });