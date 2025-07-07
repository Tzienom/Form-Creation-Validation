async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");

    users.forEach((user) => {
      const list = document.createElement("li");
      list.innerHTML = user.name;
      userList.appendChild(list);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Something went wrong:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData());
