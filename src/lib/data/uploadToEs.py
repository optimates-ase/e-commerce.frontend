from elasticsearch import Elasticsearch
import json

file = open('src/lib/data/Belize.gadm0.geo.json')
file2 = open('src/lib/data/Belize.gadm1.geo.json')
file3 = open('src/lib/data/Belize.json')
file4 = open('src/lib/data/Belize.weather.json')
#file5 = open('src/lib/data/hotspot.climate.json')

data = json.load(file)
data2 = json.load(file2)
data3 = json.load(file3)
data4 = json.load(file4)
#data5 = json.load(file5)

es = Elasticsearch('http://localhost:9200')

req = es.index(index="geo_data", document=data)
req2 = es.index(index="geo_data", document=data2)
# req3 = es.index(index="country", document=data3)
req4 = es.index(index="weather", document=data2)
#req5 = es.index(index="climate", document=data2)

print(req)
print(req2)
# print(req3)
print(req4)
#print(req5)