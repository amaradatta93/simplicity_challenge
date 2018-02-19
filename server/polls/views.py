from django.db import IntegrityError
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from items.models import Item
from users.models import Student
from .models import Vote
import json


@csrf_exempt
def add_vote(request, item_id):
    """
    User ID is sent via rest api in the request body.
    Attempts to add a vote to the given item ID.
    If the user has already voted for any item, a 400 response is returned.
    :param request:
    :param item_id:
    :return:
    """
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        if 'student_id' not in body:
            return HttpResponseBadRequest()

        vote_user = get_object_or_404(Student, pk=body['student_id'])
        vote_item = get_object_or_404(Item, pk=item_id)

        vote = Vote()
        vote.student = vote_user
        vote.item = vote_item

        try:
            vote.save()
        except IntegrityError:
            return HttpResponseBadRequest("You have already voted for this item")

        return JsonResponse({'user': vote_user.pk, 'item': vote_item.pk})

