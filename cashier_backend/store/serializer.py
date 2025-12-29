from rest_framework import serializers
from .models import BuyProduct, Product

class BuyProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyProduct
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'