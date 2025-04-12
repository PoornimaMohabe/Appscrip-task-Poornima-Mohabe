document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('.dropdown');
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');
    const optionItems = dropdown.querySelectorAll('.option');
  
    selected.addEventListener('click', () => {
      options.classList.toggle('hidden');
    });
  
    optionItems.forEach(option => {
      option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        optionItems.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        options.classList.add('hidden');
      });
    });
  
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        options.classList.add('hidden');
      }
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const filterCategories = document.querySelectorAll(".filter-category");
  
    filterCategories.forEach((category) => {
      const header = category.querySelector(".filter-header");
      const options = category.querySelector(".filter-option");
  
      // Add toggle logic
      header.addEventListener("click", () => {
        const isVisible = options.style.display === "block";
        options.style.display = isVisible ? "none" : "block";
  
        const icon = header.querySelector(".dropdown-icon");
        icon.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
      });
  
      // Hide by default
      options.style.display = "none";
    });
  });
  