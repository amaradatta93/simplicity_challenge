from django.urls import path
from . import views


urlpatterns = [
    path('<int:item_id>', views.add_vote, name='vote'),
]
