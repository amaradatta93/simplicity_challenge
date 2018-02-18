from django.db import IntegrityError
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from items.models import Item
from users.models import Student
from .models import Vote


@csrf_exempt
def add_vote(request, item_id):
    if request.method == "POST":
        if 'student_id' not in request.POST:
            return HttpResponseBadRequest()

        vote_user = get_object_or_404(Student, pk=request.POST['student_id'])
        vote_item = get_object_or_404(Item, pk=item_id)

        vote = Vote()
        vote.student = vote_user
        vote.item = vote_item

        try:
            vote.save()
        except IntegrityError:
            return HttpResponseBadRequest("You have already voted for this item")

        return JsonResponse({'user': vote_user.pk, 'item': vote_item.pk})

