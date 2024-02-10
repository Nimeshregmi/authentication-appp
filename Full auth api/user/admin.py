from django.contrib import admin
from .models import UserAccount

# Register your models here.

@admin.register(UserAccount)
class UserAccountRegister(admin.ModelAdmin):
    list_display=["id","email", "first_name", "password"]
