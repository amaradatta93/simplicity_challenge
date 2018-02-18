from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from polls.models import Vote


def student(request, user_id):
    all_student_vote = get_object_or_404(Vote, student=user_id)
    return JsonResponse(all_student_vote)
