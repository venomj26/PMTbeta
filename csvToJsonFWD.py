

# %%
import csv
import json
from collections import OrderedDict
import math

li = []
with open('/Users/jhasneha/Documents/Spring2021/SPR_indot/SPRprojectcodes/fwd_merged_SR327.csv', newline='') as csvfile:
# with open('/Users/jhasneha/Documents/spring2022/SPRINDOT/roadSchoolDemoData/US421/Sampled_US421_demo_patching.csv', newline='') as csvfile:
# with open('/Users/jhasneha/Documents/Spring2021/SPR_indot/SPRprojectcodes/fwd_merged_I69.csv', newline='') as csvfile:

    reader = csv.DictReader(csvfile)
    for row in reader:
        #print(row)
        d = OrderedDict()
        d['geometry'] = {
            'type': 'Point', #linestring geojson.io
            'coordinates': [float(row['Longitude']), float(row['Latitude'])] #two pair of points
        }
        d['type'] = 'Feature'
        d['properties']={
            'DMI': (row['DMI']),
            'D0': math.trunc(float(row["D0"])*100)/100,
            'D48': math.trunc(float(row["D48"])*100)/100,
            'BDI': math.trunc(float(row["BDI"])*100)/100,
            'BCI': math.trunc(float(row["BCI"])*100)/100,
            'SCI': round(float(row["SCI"]),3),
            #'image': row["image2D"],
            'Road': row["Road"],
            'Bound': row["Bound"],
            # 'Lane': row["Lane"]
        }
        li.append(d)

d = OrderedDict()
d['type'] = 'FeatureCollection'
d['features'] = li

with open('fwd_SR327.json','w') as f:
    json.dump(d,f,indent=4)
# with open('SampledRoadSchooldemoPatchingUS421.json','w') as f:
#     json.dump(d,f,indent=4)
# with open('fwd_I69.json','w') as f:
#     json.dump(d,f,indent=4)

# %%
