import os
import json, random
from flask import render_template, jsonify

# Carrega os versículos do JSON
def carregar_versiculos():
    caminho = os.path.join('data', 'verses.json')
    with open(caminho, encoding='utf-8') as file:
        return json.load(file)


# Rota web (HTML)
def index():
    verses = carregar_versiculos()
    verse = random.choice(verses)
    return render_template("index.html", verse=verse)


# API - Versículo aleatório
def versiculo_aleatorio():
    verses = carregar_versiculos()
    verse = random.choice(verses)
    return jsonify(verse)


# API - Todos os versículos
def todos_os_versiculos():
    verses = carregar_versiculos()
    return jsonify(verses)
