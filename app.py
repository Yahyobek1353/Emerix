
# app.py
from flask import Flask, jsonify, request
from translations import get_translation

app = Flask(__name__)

@app.route('/translations')
def translations():
    lang = request.args.get('lang', 'en')  # Получаем язык из параметра запроса
    translation = get_translation(lang)  # Получаем переводы для выбранного языка
    return jsonify(translation)  # Отправляем переводы в формате JSON

if __name__ == '__main__':
    app.run(debug=True)
# app.py
from flask import Flask, jsonify, request
from translations import get_translation

app = Flask(__name__)

@app.route('/translations')
def translations():
    lang = request.args.get('lang', 'en')  # Получаем язык из параметра запроса
    translation = get_translation(lang)  # Получаем переводы для выбранного языка
    return jsonify(translation)  # Отправляем переводы в формате JSON

if __name__ == '__main__':
    app.run(debug=True)
