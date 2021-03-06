# Generated by Django 3.2 on 2021-05-27 15:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(max_length=24)),
                ('b_image', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('item_name', models.CharField(max_length=64)),
                ('item_desc', models.CharField(max_length=128)),
                ('is_active', models.BooleanField(default=True)),
                ('item_brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='classified', to='cars.brand')),
                ('item_creater', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='creater', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_content', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('comment_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commentitem', to='cars.listing')),
                ('comment_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='commentname', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['created_on'],
            },
        ),
    ]
