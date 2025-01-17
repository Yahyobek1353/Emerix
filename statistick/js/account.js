// Получение ссылки на изображение и элемент загрузки файла
const profileImg = document.getElementById('profileImg');
const uploadInput = document.getElementById('upload');

// Проверяем, есть ли сохранённое фото в LocalStorage, и устанавливаем его
const savedPhoto = localStorage.getItem('profilePhoto');
if (savedPhoto) {
  profileImg.src = savedPhoto; // Устанавливаем сохранённое изображение
}

// Обработчик загрузки нового фото
uploadInput.addEventListener('change', function (event) {
  const file = event.target.files[0]; // Получаем файл
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const photoData = e.target.result;
      profileImg.src = photoData; // Устанавливаем новое фото
      localStorage.setItem('profilePhoto', photoData); // Сохраняем в LocalStorage
    };
    reader.readAsDataURL(file); // Читаем файл как Data URL
  }
});

// Кнопка "Изменить фото" для открытия выбора файла
document.getElementById('changePhotoBtn').addEventListener('click', function () {
  uploadInput.click(); // Открытие окна выбора файла
});
