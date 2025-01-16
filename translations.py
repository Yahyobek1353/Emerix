# translations.py

translations = {
    'en': {
        'hero_title': 'Your Safety, Our Priority',
        'hero_description': 'Emerix helps you stay safe in emergencies with a simple SOS system, emergency contacts, and more.',
        'button_sos': 'Send SOS',
        'features_title': 'Why Choose Emerix?',
        'feature_quick_sos': 'Quick SOS',
        'feature_quick_sos_description': 'Send an emergency alert with just one click.',
        'feature_contacts': 'Emergency Contacts',
        'feature_contacts_description': 'Access important numbers instantly.',
        'feature_reliable': 'Reliable',
        'feature_reliable_description': 'Available 24/7 for your peace of mind.',
        'footer_text': '© 2025 Emerix. Provider of Safety from Meerim, Osh.'
    },
    'ru': {
        'hero_title': 'Ваша безопасность — наш приоритет',
        'hero_description': 'Emerix помогает оставаться в безопасности в чрезвычайных ситуациях с помощью простой системы SOS, экстренных контактов и других функций.',
        'button_sos': 'Отправить SOS',
        'features_title': 'Почему выбрать Emerix?',
        'feature_quick_sos': 'Быстрая SOS',
        'feature_quick_sos_description': 'Отправьте экстренный сигнал всего одним кликом.',
        'feature_contacts': 'Экстренные контакты',
        'feature_contacts_description': 'Доступ к важным номерам мгновенно.',
        'feature_reliable': 'Надежно',
        'feature_reliable_description': 'Доступно 24/7 для вашего спокойствия.',
        'footer_text': '© 2025 Emerix. Провайдер безопасности от Мээрим, г. Ош.'
    },
    'kg': {
        'hero_title': 'Сиздин коопсуздугуңуз, биздин артыкчылыгыбыз',
        'hero_description': 'Emerix, SOS системасы, төтенчө байланыштар жана башкалар менен кыйынчылыктарда коопсуз болууга жардам берет.',
        'button_sos': 'SOS жиберүү',
        'features_title': 'Неге Emerixти тандайсыз?',
        'feature_quick_sos': 'Тез жардам',
        'feature_quick_sos_description': 'Бир чыкылдатуу менен төтенчө билдирүү жиберүү.',
        'feature_contacts': 'Төтөнчө байланыштар',
        'feature_contacts_description': 'Маалыматтарды дароо жеткиликтүү кылуу.',
        'feature_reliable': 'Ыкчам',
        'feature_reliable_description': '24/7 иштеп турат, сиздин тынчсыздануусуз.',
        'footer_text': '© 2025 Emerix. Коопсуздук камсыздоочусу, Мээрим, Ош.'
    }
}

def get_translation(language_code):
    return translations.get(language_code, translations['en'])
