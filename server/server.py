from flask import Flask, request
import json
from config import db

#globalVariables
items = []

app = Flask(__name__)

@app.get("/")
def home():
    return "hello from flask"

@app.get("/test")
def test():
    return "this is a test"

@app.get("/api/about")
def about():
    myName = {"name":"Richard Dil"}
    return json.dumps(myName)

product = []

def fix_id(obj):
    obj["_id"]=str(obj["_id"])
    return obj

@app.post("/api/products")
def save_product():
    newItem = request.get_json()
    print(newItem)
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))


@app.get("/api/products")
def get_product():
    return json.dump(items)


app.run(debug = True ) 