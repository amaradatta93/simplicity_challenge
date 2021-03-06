from django.db.models import Count
from django.http import JsonResponse

from .models import Item


def item(request):
    """
    {
        [
            {'item': {'id': 1, 'name': 'Apple'}, 'votes': 3},
            {'item': {'id': 2, 'name': 'Orange'}, 'votes': 2},
        ]
    }

    The item and the total votes for the items are converted into a list and returned
    """

    all_items = Item.objects.annotate(total_votes=Count('vote')).values('pk', 'name', 'total_votes')
    return JsonResponse({'items': list(all_items)})
