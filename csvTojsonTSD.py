#%%
import csv
import json
from collections import OrderedDict
import math

li = []
#with open('/Users/jhasneha/Documents/spring2022/SPRINDOT/roadSchoolDemoData/SR327/Sampled_SR327_demo_patching_image.csv', newline='') as csvfile:
#with open('/Users/jhasneha/Documents/spring2022/SPRINDOT/roadSchoolDemoData/US421/Sampled_US421_demo_patching.csv', newline='') as csvfile:
with open('/Users/jhasneha/Library/CloudStorage/OneDrive-purdue.edu/Spring2021/SPR_indot/SPRprojectcodes/TSDSACData_sampled.csv', newline='') as csvfile:

    reader = csv.DictReader(csvfile)
    for row in reader:
        #print(row)
        d = OrderedDict()
        d['geometry'] = {
            'type': 'Point', #linestring geojson.io
            'coordinates': [float(row['FROM_LONGITUDE']), float(row['FROM_LATITUDE'])] #two pair of points
        }
        d['type'] = 'Feature'
        d['properties']={
            'Index': row["INDEX"],
            'L_IRI': math.trunc(float(row["L_IRI"])*100)/100,
            'R_IRI': math.trunc(float(row["R_IRI"])*100)/100,
            'patching': row["Patching_color_map"],
            'color':row["Patching_color"],
            'D0': math.trunc(float(row["D0"])*100)/100,
            'D60': math.trunc(float(row["D60"])*100)/100,
            'BDI': math.trunc(float(row["BDI"])*100)/100,
            'BCI': math.trunc(float(row["BCI"])*100)/100,
            'SCI': round(float(row["SCI"]),3),
            'crackingPercent': math.trunc(float(row["PERCENT_TOTAL_CRACK"])*100)/100,
            #'3DImg': row["3DImgName"],
            #'rowImg': row['rowImgName'],
            'Road': row["Road"],
            #'Bound': row["Bound"],
            'Lane': row["Lane"],
            'milePost': row["milePost"],
            'surveySpeed': row["SURVEY_SPEED"]
        }
        li.append(d)

d = OrderedDict()
d['type'] = 'FeatureCollection'
d['features'] = li

# with open('SampledRoadSchooldemoPatchingSR327image.json','w') as f:
#     json.dump(d,f,indent=4)
# with open('SampledRoadSchooldemoPatchingUS421.json','w') as f:
#     json.dump(d,f,indent=4)
with open('tsdDemoData_sampledMilePost.json','w') as f:
    json.dump(d,f,indent=4)
# %%
