from datetime import datetime
from django.shortcuts import render

from django.http import HttpResponse

import requests
import omdb

from omdb import OMDBClient

omdb.set_default('apikey', 'b6ca1403')


# OMDB_paylaod = {'apikey': 'b6ca1403', 'i': 'tt3896198'}
# TMDB_payload = {'api_key': '266a19f2cbb8928d69aeaea44f393c68'}

def stream(req):
    return HttpResponse('<iframe src="https://archive.org/embed/CC_1916_07_10_TheVagabond" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>')

def date(req):
    return HttpResponse("Served @: " + str(datetime.now()))

def about(req):

    boom = omdb.get(title='The Fresh Prince', fullplot=True, tomatoes=True)
    # res = omdb.search('Fresh')

    # api3 = 'https://api.themoviedb.org/3/movie/550?api_key=266a19f2cbb8928d69aeaea44f393c68'
    # api2 = 'https://api.themoviedb.org&api_key=266a19f2cbb8928d69aeaea44f393c68'
    # api = 'http://www.omdbapi.com/?i=tt3896198&apikey=b6ca1403'
    # res = omdb.request(t='The Matrix', r='xml')

    # http = requests.request('POST', api)

    return HttpResponse(boom['title'])



# OMDB API:    http://www.omdbapi.com/?i=tt3896198&apikey=b6ca1403
#
#
#
#
# TMDB API:     https://api.themoviedb.org/3/movie/550?api_key=266a19f2cbb8928d69aeaea44f393c68
#
# TMDB API Discovery queries:
#
# What movies are in theatres?
# URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

# What are the most popular movies?
# URL: https://api.themoviedb.org/discover/movie?sort_by=popularity.desc

# What are the highest rated movies rated R?
# URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

# What are the most popular kids movies?
# URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

# What is are the best movies from 2010?
# URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

# What are the best dramas that were released this year?
# URL: /discover/movie?with_genres=18&primary_release_year=2014

# What are the highest rated science fiction movies that Tom Cruise has been in?
# URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

# What are the Will Ferrell's highest grossing comedies?
# URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

# Have Brad Pitt and Edward Norton ever been in a movie together?
# URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc

# Has David Fincher ever worked with Rooney Mara?
# URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc

# What are the best drama's?
# URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

# What are Liam Neeson's highest grossing rated 'R' movies?
# URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896
