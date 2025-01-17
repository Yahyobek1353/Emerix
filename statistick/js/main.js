// Функция для смены языка
function changeLanguage(language) {
    fetch(`http://127.0.0.1:5000/translations?lang=${language}`)
        .then(response => response.json())
        .then(data => {
            // Обновление текста на странице
            const elements = [
                { id: "hero-title", text: data.hero_title },
                { id: "hero-description", text: data.hero_description },
                { id: "btn-sos", text: data.button_sos },
                { id: "features-title", text: data.features_title },
                { id: "feature-quick-sos", text: data.feature_quick_sos },
                { id: "feature-quick-sos-description", text: data.feature_quick_sos_description },
                { id: "feature-contacts", text: data.feature_contacts },
                { id: "feature-contacts-description", text: data.feature_contacts_description },
                { id: "feature-reliable", text: data.feature_reliable },
                { id: "feature-reliable-description", text: data.feature_reliable_description },
                { id: "footer-text", text: data.footer_text }
            ];
            elements.forEach(({ id, text }) => {
                const element = document.getElementById(id);
                if (element) element.innerText = text;
            });
        })
        .catch(error => console.error('Ошибка:', error));
}
