"""pseudo random generation based on cicada principle"""
from datetime import timedelta
from django.utils import timezone
from itertools import cycle
from random import shuffle

from django.db import migrations

LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' \
              'Nam pulvinar convallis tortor sit amet tincidunt. Morbi posuere iaculis est gravida luctus. ' \
              'Cras sem metus, convallis in rhoncus in, rutrum non nulla. ' \
              'In elementum convallis eros, ac molestie erat porttitor fermentum. ' \
              'Curabitur feugiat tincidunt purus at placerat. ' \
              'Curabitur iaculis nunc ac feugiat tempor. Morbi eget justo ac urna iaculis hendrerit ' \
              'id eget odio. Donec blandit ipsum consequat orci commodo lobortis. Donec cursus massa ornare lectus ' \
              'porttitor, non auctor quam consequat. Fusce tincidunt ullamcorper ante at rhoncus. ' \
              'Vestibulum ut semper felis, quis tristique mi. Nam mattis vulputate ex ac gravida. ' \
              'Sed orci massa, cursus a consectetur id, eleifend at nisl. Proin at tortor quis magna ' \
              'fermentum ultricies. Quisque vel vehicula nisl. Cras accumsan ornare placerat.'
LOREM_IPSUM = LOREM_IPSUM.split()
POSSIBLE_MESSAGE_LENGTHS = [10, 20, 12, 60, 45, 24, 35, 49, 41, 14, 18, 65, 121, 241, 85, 63, 54]
POSSIBLE_MESSAGES = cycle([' '.join(LOREM_IPSUM[:lim]) for lim in POSSIBLE_MESSAGE_LENGTHS])
POSSIBLE_USERNAMES = [f'user{x}' for x in range(23)]
shuffle(POSSIBLE_USERNAMES, lambda: 0.5)
POSSIBLE_USERNAMES = cycle(POSSIBLE_USERNAMES)
TIMEDELTA = timedelta(minutes=3, seconds=23)
NUMBER_OF_MESSAGES = 10000


def add_messages(apps, schema_editor):
    Message = apps.get_model('chat', 'Message')
    current_date = timezone.now()
    Message.objects.bulk_create([
        Message(
            content=next(POSSIBLE_MESSAGES),
            username=next(POSSIBLE_USERNAMES),
            created_at=current_date - TIMEDELTA * (NUMBER_OF_MESSAGES - i)
        )
        for i in range(NUMBER_OF_MESSAGES)
    ])


class Migration(migrations.Migration):
    dependencies = [
        ('chat', '0004_message_created_at_default'),
    ]

    operations = [
        migrations.RunPython(add_messages),
    ]
