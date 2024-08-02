from flask import Flask, request
import json
from config import db
from flask import CORS

#globalVariables
items = []

app = Flask(__name__)
CORS(app)

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
    db.products.insert_one(newItem)
    return json.dumps(fix_id(newItem))


@app.get("/api/products")
def get_product():
    #reads all products from the database
    cursor = db.products.find({})
    results = []
    for prod in cursor:
        if "catagory" in prod:
         results.append(fix_id(prod))
    
    return json.dumps(results)


@app.get("/api/categories")
def get_categories():
    cursor =db.products.find({})
    cats = []
    for prod in cursor:
         if "catagory" in prod:
             cat= prod["catagory"]
             if cat not in cats:
                cats.append(prod["catagory"])
    
   
    
    return json.dumps(cats)

app.run(debug = True ) 


#rest api
# rest tools => rest ipa
#postman, 