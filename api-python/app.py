from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify({
        "Instancia": "Instancia #1 - API #1",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Estudiante - 202202525"
    })

@app.route("/check")
def check():
    return "", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
