from django.db import models
from datetime import datetime


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.IntegerField()

    def __str__(self):
        return f"{self.name} : {self.price} bath"

class Bill(models.Model):
    date = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return f"bill date {self.date}"

class BuyProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    bill = models.ForeignKey(Bill, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.product.name}x{self.quantity} : {self.bill.date}"

