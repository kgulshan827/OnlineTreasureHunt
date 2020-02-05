from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name="index"),
    path('answer/',views.answer,name='answer'),
    path('lboard/',views.lboard,name="lboard"),
    path('rules/', views.rules, name='rules'),
    path('api/scoreboard/', views.lboard_api, name='lboard_api')
]