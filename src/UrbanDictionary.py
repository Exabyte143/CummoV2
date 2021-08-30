import sys
import json
import requests
from bs4 import BeautifulSoup
query = sys.argv[1]
query = "https://www.urbandictionary.com/define.php?term=" + query
query = query.replace(' ', "%20")
query = requests.get(query)
    
if query.status_code == 200:
        
    soup = BeautifulSoup(query.text, "lxml")
    Result = {
        "Name" : soup.find("div", class_="def-header").text,
        "Meaning" : soup.find("div", class_="meaning").text,
        "Example" : soup.find("div", class_="example").text,
        "Contributor" : soup.find("div", class_="contributor").text,
    }
else:
    Result = {
        "error": "Couldn't find the word."
    }

print(json.dumps(Result))
        