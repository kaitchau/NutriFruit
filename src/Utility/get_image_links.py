import requests
import json

# End point for the image search api that we are usnig
image_search_endpoint = "https://imsea.herokuapp.com/api/1?q="

## End point for all the fruit data we are using
## Couldn't use this with JavaScript because of problems with CORS on the requested resource
fruit_data_endpoint = "https://www.fruityvice.com/api/fruit/all"

fruits = requests.get(fruit_data_endpoint).json()
fruit_names = [f["name"] for f in fruits]

print("...")
images = []
for fruit in fruit_names:
    search_endpoint = image_search_endpoint + fruit
    resp = requests.get(search_endpoint).json()
    images.append(resp["results"][0])

to_jsonify = dict(zip(fruit_names, images))

with open("./image_links.json", "w") as f:
    f.write(json.dumps(to_jsonify, indent=4))
