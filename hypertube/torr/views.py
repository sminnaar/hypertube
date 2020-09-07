from datetime import datetime
from django.shortcuts import render

from django.http import HttpResponse


def stream(req):
    return HttpResponse('<iframe src="https://archive.org/embed/CC_1916_07_10_TheVagabond" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>')

def date(req):
    return HttpResponse("Served @: " + str(datetime.now()))

def about(req):
    return HttpResponse('<h1>We torrent legally!!!</h1>')
