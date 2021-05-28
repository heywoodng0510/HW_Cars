from django.contrib import admin

from .models import User, Listing, Brand, Comment

# Register your models here.
admin.site.register(Listing)
admin.site.register(Brand)
admin.site.register(User)
admin.site.register(Comment)