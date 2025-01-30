import binIcon from "../assets/images/trash.png";

const updateTask = () => {
  document.querySelectorAll("#menu-dots").forEach((task) =>
    task.addEventListener("click", () => {
      task.parentElement.setAttribute("style", "background-color: yellow");

      const img = document.getElementById("menu-dots");
      img.src = binIcon;
      img.id = "trash";
      img.alt = "trash";

      task.parentElement.append(trash);

      task.parentElement
        .querySelector(".input-task-item")
        .setAttribute("style", "background-color: yellow");
      task.parentElement
        .querySelector(".input-task-item")
        .removeAttribute("disabled");
      task.parentElement
        .querySelector(".input-task-item")
        .toggleAttribute("autofocus", true);

      const oldDescription =
        task.parentElement.querySelector(".input-task-item").value;

      task.parentElement
        .querySelector(".input-task-item")
        .addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            const tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.map((t) => {
              if (t.description === oldDescription)
                t.description =
                  task.parentElement.querySelector(".input-task-item").value;
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            task.parentElement
              .querySelector(".input-task-item")
              .removeAttribute("style");

            task.parentElement.removeAttribute(
              "style",
              "background-color: yellow"
            );

            task.parentElement
              .querySelector(".input-task-item")
              .setAttribute("disabled", true);

            console.log(
              task.parentElement.querySelector(".input-task-item").value
            );
            console.log(oldDescription);
          }
        });
    })
  );
};

export default updateTask;
