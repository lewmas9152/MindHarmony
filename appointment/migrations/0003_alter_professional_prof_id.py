# Generated by Django 5.0.6 on 2024-07-08 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0002_alter_professional_prof_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professional',
            name='prof_id',
            field=models.IntegerField(auto_created=True, default=12),
        ),
    ]
