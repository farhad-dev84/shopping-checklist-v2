// گرفتن عناصر از صفحه
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const itemCount = document.getElementById('itemCount');
const clearAll = document.getElementById('clearAll');

// بروزرسانی تعداد آیتم‌ها
function updateCount() {
  const count = itemList.children.length;
  itemCount.textContent = `Total Items: ${count}`;
  if (count === 0) {
    itemList.innerHTML = '<li class="list-group-item text-center">List is empty</li>';
  }
}

// اضافه کردن آیتم جدید
itemForm.addEventListener('submit', function(e) {
  e.preventDefault(); // جلوگیری از رفرش صفحه

  const itemText = itemInput.value.trim();
  if (!itemText) return;

  // ساخت آیتم لیست به همراه دکمه حذف
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <span>${itemText}</span>
    <button class="btn btn-danger btn-sm delete">Delete</button>
  `;

  // افزودن آیتم به لیست
  if (itemList.querySelector('li.text-center')) itemList.innerHTML = '';
  itemList.appendChild(li);
  itemInput.value = '';
  updateCount();
});

// حذف آیتم تکی با تأیید
itemList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure to delete this item?')) {
      e.target.parentElement.remove();
      updateCount();
    }
  }
});

// حذف همه آیتم‌ها با کلیک روی دکمه Clear All
clearAll.addEventListener('click', function() {
  if (confirm('Are you sure to clear all items?')) {
    itemList.innerHTML = '';
    updateCount();
  }
});

// نمایش پیام اولیه در صورت خالی بودن لیست
updateCount();


