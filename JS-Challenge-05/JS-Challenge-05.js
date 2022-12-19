class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }
async function loadJson(url) {
  const urlResponse = await fetch(url);
  if (urlResponse.status == 200) return urlResponse.json();
  throw new HttpError(urlResponse);
}

// function demoGithubUser() {
//   let name = prompt("Enter a name?", "vanimar");
//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
// demoGithubUser();

async function demoGithubUser() {
  // let name = prompt("Enter a name?", "vanimar");
  // let name = "vandsfasfsdfimar";
  let name = "vanimar";
  try {
    const gettedUser = await loadJson(`https://api.github.com/users/${name}`);
    console.log(`Full name: ${gettedUser.name}.`);
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      console.log("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();
