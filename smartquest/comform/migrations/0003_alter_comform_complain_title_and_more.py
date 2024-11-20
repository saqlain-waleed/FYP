# Generated by Django 5.1.3 on 2024-11-18 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comform', '0002_remove_comform_image_remove_comform_price_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comform',
            name='complain_title',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='comform',
            name='department',
            field=models.CharField(choices=[('CIVIL', 'CIVIL'), ('MECHANICAL', 'MECHANICAL'), ('COMPUTER SCIENCE', 'COMPUTER SCIENCE'), ('BME', 'BME'), ('ELECTRICAL', 'ELECTRICAL')], max_length=100),
        ),
        migrations.AlterField(
            model_name='comform',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='comform',
            name='session',
            field=models.CharField(max_length=50),
        ),
    ]