from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from polls.models import Vote
from users.models import Student


def student(request, user_id):
    """
    The user_id parameter is taken and the corresponding user is returned as json
    :param request:
    :param user_id:
    :return:
    """
    user = get_object_or_404(Student, pk=user_id)
    return JsonResponse(user.as_dict())


def votes(request, user_id):
    """
    The user and the items on which they have voted are returned as a list
    :param request:
    :param user_id:
    :return:
    """
    user = get_object_or_404(Student, pk=user_id)
    user_votes = Vote.objects.filter(student=user)

    output = []
    for vote in user_votes:
        output.append({'item': {'name': vote.item.name, 'id': vote.item.pk}, 'id': vote.pk})

    return JsonResponse({'votes': output})
