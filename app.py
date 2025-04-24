from flask import Flask, render_template, jsonify
from controllers import index, versiculo_aleatorio, todos_os_versiculos, carregar_versiculos

app = Flask(__name__)

# Rota HTML
@app.route("/")
def home():
    return render_template("index.html")


# Rota API - 1 aleatório
@app.route("/api/verse")
def api_versiculo():
    return versiculo_aleatorio()


# Rota API - Todos
@app.route("/api/verses")
def api_verses():
    verses = carregar_versiculos()
    return jsonify(verses)  # Retorna JSON para o JS


if __name__ == "__main__":
    app.run(debug=True)
