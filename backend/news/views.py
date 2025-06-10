from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import NewsPost
from .serializers import NewsPostSerializer

@api_view(['GET'])
def news_list(request):
    posts = NewsPost.objects.all()[:10]  # only show recent 10
    serializer = NewsPostSerializer(posts, many=True)
    return Response(serializer.data)
