from django.db import models


class Message(models.Model):
    # TODO authentication
    username = models.CharField(max_length=127)
    content = models.TextField(max_length=4096)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.full_clean()
        self.content = self.content.strip()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.username}: {self.content[:50]}'

    # TODO use something like DRF or default serialization
    def get_serialized(self):
        return {
            'id': self.pk,
            'date': self.created_at.isoformat(),
            'content': self.content,
            'username': self.username,
        }

    class Meta:
        db_table = 'messages'
        ordering = ('created_at', )
