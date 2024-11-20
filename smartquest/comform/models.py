from django.db import models

class comform(models.Model):
    # Department Choices
    DEPARTMENT_CHOICES = [
        ('CIVIL', 'CIVIL'),
        ('MECHANICAL', 'MECHANICAL'),
        ('COMPUTER SCIENCE', 'COMPUTER SCIENCE'),
        ('BME', 'BME'),
        ('ELECTRICAL', 'ELECTRICAL'),
    ]

    # Session Choices
    SESSION_CHOICES = [
        ('2021', '2021'),
        ('2022', '2022'),
        ('2023', '2023'),
        ('2024', '2024'),
        ('2025', '2025'),
    ]
    
    # Fields
    name = models.CharField(max_length=150, null=False, blank=False)
    complain_title = models.CharField(max_length=200, null=False, blank=False)
    department = models.CharField(max_length=100, choices=DEPARTMENT_CHOICES, null=False, blank=False)
    session = models.CharField(max_length=50, choices=SESSION_CHOICES, null=False, blank=False)
    attachment = models.FileField(upload_to='uploads/attachments/', null=True, blank=True)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.complain_title
