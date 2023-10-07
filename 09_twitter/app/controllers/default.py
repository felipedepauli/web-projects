from app import app
from flask import render_template


@app.route("/<satanas>")
@app.route("/")
def index(satanas=None):
    if satanas:
        return render_template("index.html", user=satanas.capitalize())
    else:
        return render_template("index.html", user="Anônimo")
    
@app.route("/user", defaults = {'satanas_vive':None})
@app.route("/user/<satanas_vive>")
def user(satanas_vive):
    if satanas_vive == None:
        return "Porra, meu irmão! Coloca a porra do nome ali em cima, porra!"
    else:
        return satanas_vive

