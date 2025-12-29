from django.urls import path
from .views import CreatePurchase, ListProduct

urlpatterns = [
    path("create_purchase/", CreatePurchase.as_view()),
    path("list_product/", ListProduct.as_view())
]