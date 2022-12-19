///Nested Callbacks and the Pyramid of Doom

function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      setTimeout(() => {
        console.log(3);
      },1000);
      const promise = new Promise((resolve, reject) => {
        resolve(2);
      });
      return promise.then((response) => console.log(response));
    }, 2000);
  }, 1000);
}

pyramidOfDoom();

// ///With promises
// function getUsers(onSuccess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Handle resolve and reject in the asynchronous API
//       if (onSuccess) {
//         resolve([
//           { id: 1, name: "Jerry" },
//           { id: 2, name: "Elaine" },
//           { id: 3, name: "George" },
//         ]);
//       } else {
//         reject("Failed to fetch data!");
//       }
//     }, 1000);
//   });
// }

// // Run the getUsers function with the true flag to resolve successfully
// getUsers(true)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
