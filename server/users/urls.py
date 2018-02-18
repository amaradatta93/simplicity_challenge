from django.urls import path
from . import views


urlpatterns = [
    path('<int:user_id>/', views.student, name='student'),
    path('<int:user_id>/votes/', views.votes, name='votes'),
]