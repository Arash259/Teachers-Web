from django.db import models
from courses.models import Chapter

class Content(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='contents')
    content_type = models.CharField(max_length=50)  # text, formula, image, table
    content_data = models.TextField()  # JSON or plain text
    order = models.IntegerField()

    def __str__(self):
        return f"Content for {self.chapter.title}"