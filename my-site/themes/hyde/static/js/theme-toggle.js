document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
  
    // 現在のテーマを保存・取得
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      body.classList.add("dark-theme");
    }
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-theme");
  
      // 現在のテーマを保存
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  