from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from items.models import Item
from users.models import Student
from .models import Vote


def add_vote(request, item_id):
    vote_user = get_object_or_404(Student, pk=request.body['student_id'])
    vote_item = get_object_or_404(Item, pk=item_id)

    vote = Vote()
    vote.student = vote_user
    vote.item = vote_item
    vote.save()
    return JsonResponse({{'vote_user': vote_user}, {'vote_item': vote_item}})

