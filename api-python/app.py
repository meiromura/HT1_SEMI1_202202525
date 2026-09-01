from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify({
        "alumno": "Jose Andres de Paz Benito",
        "carnet": "202202525",
        "seccion": "B",
        "api": "API #1",
        "lenguaje": "Python",
        "framework": "Flask"
    })

@app.route("/check")
def check():
    return "", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
