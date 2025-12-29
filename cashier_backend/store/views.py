from rest_framework import status, generics
from .serializer import BuyProductSerializer, ProductSerializer
from .models import BuyProduct, Product


class CreatePurchase(generics.ListCreateAPIView):
    queryset = BuyProduct.objects.all()
    serializer_class = BuyProductSerializer

class ListProduct(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
