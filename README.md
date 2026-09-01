# HT1_SEMI1_202202525

Te muestro cómo correr cada una localmente.
API #1 (Python/Flask) — en /home/akmte/u/semi1/ht1/api-python:
pip install -r requirements.txt
python app.py
Corre en el puerto 5000. Prueba: curl http://localhost:5000/ y curl http://localhost:5000/check



API #2 (JavaScript/Express) — en /home/akmte/u/semi1/ht1/api-javascript:
npm install
npm start
Corre en el puerto 3000. Prueba: curl http://localhost:3000/ y curl http://localhost:3000/check
En EC2 usas nohup ... & para dejarlas corriendo en segundo plano y que no se cierren al cerrar la sesión.