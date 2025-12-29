from django.contrib import admin
from .models import *


@admin.register(Product)
class AdminProduct(admin.ModelAdmin):
    pass

@admin.register(Bill)
class AdminBill(admin.ModelAdmin):
    pass

@admin.register(BuyProduct)
class AdminBuyProduct(admin.ModelAdmin):
    pass