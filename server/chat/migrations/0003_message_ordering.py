from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_message'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ('created_at',)},
        ),
    ]
