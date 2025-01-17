from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Загрузка данных из JSON-файлов
with open("translations.json", "r", encoding="utf-8") as file:
    translations = json.load(file)

with open("contacts.json", "r", encoding="utf-8") as file:
    contacts = json.load(file)


@app.route("/", methods=["GET"])
def home():
    return jsonify(translations)

# API для смены языка
@app.route("/translations", methods=["GET"])
def get_translations():
    lang = request.args.get("lang", "ru")
    if lang in translations:
        return jsonify(translations[lang])
    else:
        return jsonify({"error": "Language not supported"}), 400

# API для получения контактов экстренных служб
@app.route("/contacts", methods=["GET"])
def get_contacts():
    return jsonify(contacts)

if __name__ == "__main__":
    app.run(debug=True)
