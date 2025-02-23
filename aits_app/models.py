from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

# Create your models here.
class CustomUser (AbstractUser ):
    USER_ROLES = (
    ('STUDENT', 'Student'),
    ('LECTURER', 'Lecturer'),
    ('ADMIN', 'Administrator')
    )

    role= models.CharField(max_length=10, choices=USER_ROLES)
    department= models.ForeignKey('Department', on_delete=models.SET_NULL, null=True, blank=True)
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Change this to a unique name
        blank=True,
    )
    
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Change this to a unique name
        blank=True,
    )

    def __str__(self):
        return self.name
class Department(models.Model):
    name= models.CharField(max_length=100, unique=True)  
    description = models.TextField(blank=True, null= True)    
    def __str__(self):
        return self.name
      
class Issue(models.Model):
    CATEGORY_CHOICES=(
        ('Open', 'Open'),
        ('Missing_Marks', 'Missing_marks'),
        ('Appeal', 'Appeal'),
        ('Resolved', 'Resolved'),
        ('Closed', 'Closed'),

    )
    
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='OPEN')  
    assigned_to = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='assigned_issues')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

